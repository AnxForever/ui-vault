# Registers a scheduled task that runs the affectUI watcher.
#   powershell -ExecutionPolicy Bypass -File register-task.ps1
#   powershell -ExecutionPolicy Bypass -File register-task.ps1 -Remove
param(
  [string]$Root = "D:\contest_hei\affectui",
  [string]$TaskName = "affectUI-Watch",
  [int]$EveryHours = 12,
  [switch]$Remove
)

$ErrorActionPreference = "Stop"

if ($Remove) {
  schtasks /Query /TN $TaskName 2>$null | Out-Null
  if ($LASTEXITCODE -eq 0) {
    schtasks /Delete /TN $TaskName /F | Out-Null
    Write-Host "removed: $TaskName"
  } else {
    Write-Host "not registered: $TaskName"
  }
  return
}

if (-not (Test-Path (Join-Path $Root "watch.mjs"))) {
  throw "watch.mjs not found under $Root"
}

$node = (Get-Command node).Source
$log = Join-Path $Root "watch.log"
$cmd = "`"$node`" `"$Root\watch.mjs`" >> `"$log`" 2>&1"

# A task per N hours, starting now. schtasks /SC HOURLY /MO caps at 1..23.
if ($EveryHours -lt 24) {
  schtasks /Create /TN $TaskName /TR "cmd /c $cmd" /SC HOURLY /MO $EveryHours /F | Out-Null
} else {
  $days = [int]($EveryHours / 24)
  schtasks /Create /TN $TaskName /TR "cmd /c $cmd" /SC DAILY /MO $days /F | Out-Null
}

if ($LASTEXITCODE -eq 0) {
  Write-Host "registered: $TaskName (every $EveryHours h)"
  Write-Host "  workdir : $Root"
  Write-Host "  log     : $log"
  schtasks /Query /TN $TaskName /FO LIST | Select-String -Pattern "TaskName|Next Run|Status|下次运行|状态"
} else {
  throw "schtasks failed with exit code $LASTEXITCODE"
}
