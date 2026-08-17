import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/** A photo tossed on the blanket — white border, soft shadow, slight tilt. */
export function PhotoScrap({
  src,
  alt,
  className,
  caption,
  width = 480,
  height = 480,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  caption?: string
  width?: number
  height?: number
  priority?: boolean
}) {
  return (
    <figure
      className={cn(
        'shadow-photo bg-card rounded-[2px] border border-border p-1.5 pb-2',
        className,
      )}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-full object-cover"
      />
      {caption ? (
        <figcaption className="font-serif pt-1 text-center text-lg leading-none text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

/** A snapshot of an object (basket, fries) — framed, purely atmospheric. */
export function CutOut({
  src,
  alt,
  className,
  width = 420,
  height = 420,
  decorative = false,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  decorative?: boolean
}) {
  return (
    <div
      aria-hidden={decorative || undefined}
      className={cn(
        'shadow-photo pointer-events-none rounded-[2px] border border-border bg-card p-1.5 select-none',
        className,
      )}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt={decorative ? '' : alt}
        width={width}
        height={height}
        className="aspect-square w-full object-cover"
      />
    </div>
  )
}

/** Spiral-bound notebook card. */
export function NotebookCard({
  children,
  className,
  ruled = false,
}: {
  children: ReactNode
  className?: string
  ruled?: boolean
}) {
  return (
    <div
      className={cn(
        'shadow-photo bg-card paper relative rounded-lg border border-border',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 flex w-7 flex-col items-center justify-evenly rounded-l-lg border-r border-dashed border-border/80 bg-primary/5"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="block size-2.5 rounded-full border border-primary/40 bg-background"
          />
        ))}
      </div>
      <div className={cn('pl-10', ruled && 'ruled')}>{children}</div>
    </div>
  )
}

/** A small torn-paper note. */
export function TornNote({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'shadow-photo bg-card paper relative border border-border px-5 py-4',
        className,
      )}
      style={{
        clipPath:
          'polygon(0% 3%, 4% 0%, 22% 2%, 47% 0%, 71% 2.5%, 96% 0%, 100% 4%, 99% 28%, 100% 62%, 98.5% 96%, 95% 100%, 68% 98%, 41% 100%, 18% 97.5%, 3% 100%, 0% 95%, 1.5% 61%, 0% 30%)',
      }}
    >
      {children}
    </div>
  )
}

/** A strip of washi tape, for pinning things down. */
export function Tape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'tape-piece absolute h-6 w-20 rotate-[-4deg] rounded-[1px]',
        className,
      )}
    />
  )
}
