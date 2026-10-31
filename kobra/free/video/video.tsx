import { LoomixPlayer, type LoomixPlayerProps } from 'loomix'
import { useEffect, useRef } from 'react'

import { attachGlassControls } from '@/lib/glass-controls'
import { cn } from '@/lib/utils'

export type VideoGlass = 'liquid' | 'blur'

export function Video({ glass = 'liquid', ...props }: LoomixPlayerProps & { glass?: VideoGlass }) {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = host.current?.querySelector('video')

    if (!video || video.readyState < 1) return
    video.dispatchEvent(new Event('loadedmetadata'))
  }, [props.src])

  useEffect(() => {
    const hostEl = host.current
    if (!hostEl) return

    const controller = new AbortController()
    let detach: (() => void) | null = null

    void attachGlassControls(hostEl, controller.signal, glass === 'blur').then((teardown) => {

      if (controller.signal.aborted) teardown()
      else detach = teardown
    })

    return () => {
      controller.abort()
      detach?.()
    }
  }, [props.src, props.disableSkip, props.loading, glass])

  return (

    <div ref={host} dir="ltr" className="contents">
      <LoomixPlayer
        {...props}

        className={cn(
          'video-player aspect-video w-full overflow-hidden rounded-xl border [&>div>button[aria-label=Pause]>svg]:size-8 md:[&>div>button[aria-label=Pause]>svg]:size-10 [&>div>button[aria-label=Play]>svg]:size-8 md:[&>div>button[aria-label=Play]>svg]:size-10',
          glass === 'blur' ? 'video-blur' : '[&:not([data-glass=live])>div>button]:invisible',
          props.className,
        )}
      />
    </div>
  )
}
