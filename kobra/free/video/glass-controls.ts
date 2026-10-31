type Controls = {
  root: HTMLElement
  layer: HTMLElement
  buttons: HTMLElement[]
}

const noop = () => {}

let players = 0
function sitOut(root: HTMLElement) {
  players += 1
  root.style.viewTransitionName = `kobra-video-${String(players)}`
  root.style.setProperty('view-transition-class', 'kobra-video')
  return () => {
    root.style.viewTransitionName = ''
    root.style.removeProperty('view-transition-class')
  }
}

function attachFrostedControls({ layer, buttons }: Controls) {
  const hidden = layer.getAttribute('aria-hidden')
  const tabIndexes = buttons.map((button) => button.getAttribute('tabindex'))

  const syncAccess = () => {
    const visible = buttons.map((button) => button.classList.contains('pointer-events-auto'))
    const nextHidden = String(!visible.some(Boolean))
    if (layer.getAttribute('aria-hidden') !== nextHidden) {
      layer.setAttribute('aria-hidden', nextHidden)
    }
    for (const [index, button] of buttons.entries()) {
      const tabIndex = visible[index] ? 0 : -1
      if (button.tabIndex !== tabIndex) button.tabIndex = tabIndex
    }
  }
  const observer = new MutationObserver(syncAccess)
  observer.observe(layer, {
    attributes: true,
    subtree: true,
    attributeFilter: ['class', 'aria-hidden', 'tabindex'],
  })
  syncAccess()

  return () => {
    observer.disconnect()
    if (hidden === null) layer.removeAttribute('aria-hidden')
    else layer.setAttribute('aria-hidden', hidden)
    for (const [index, button] of buttons.entries()) {
      const tabIndex = tabIndexes[index]
      if (tabIndex == null) button.removeAttribute('tabindex')
      else button.setAttribute('tabindex', tabIndex)
    }
  }
}

function findControls(host: HTMLElement): Controls | null {
  const video = host.querySelector('video')
  const root = video?.parentElement
  if (!video || !root) return null

  const frame = root.clientHeight
  if (frame === 0) return null

  const layer = Array.from(root.children).find(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      child !== video &&
      child.querySelector('button') !== null &&
      child.getBoundingClientRect().height > frame * 0.8,
  )
  const buttons = layer ? Array.from(layer.querySelectorAll('button')) : []
  return layer && buttons.length > 0 ? { root, layer, buttons } : null
}

function waitForControls(host: HTMLElement, signal: AbortSignal): Promise<Controls | null> {
  const now = findControls(host)
  if (now) return Promise.resolve(now)

  return new Promise((resolve) => {
    let watched: Element | null = null
    const stop = (value: Controls | null) => {
      mutations.disconnect()
      resizes.disconnect()
      clearTimeout(timer)
      signal.removeEventListener('abort', onAbort)
      resolve(value)
    }
    const onAbort = () => stop(null)
    const retry = () => {
      const found = findControls(host)
      if (found) {
        stop(found)
        return
      }
      const root = host.querySelector('video')?.parentElement
      if (root && root !== watched) {
        watched = root
        resizes.observe(root)
      }
    }
    const mutations = new MutationObserver(retry)

    const resizes = new ResizeObserver(retry)
    const timer = setTimeout(() => stop(null), 10_000)

    mutations.observe(host, { childList: true, subtree: true })
    signal.addEventListener('abort', onAbort, { once: true })
    retry()
  })
}

export async function attachGlassControls(
  host: HTMLElement,
  signal: AbortSignal,
  blur = false,
): Promise<() => void> {
  const controls = await waitForControls(host, signal)
  if (!controls || signal.aborted) return noop

  const rejoin = sitOut(controls.root)

  if (!blur && !CSS.supports('-moz-appearance', 'none')) return rejoin

  const detach = attachFrostedControls(controls)
  return () => {
    detach()
    rejoin()
  }
}
