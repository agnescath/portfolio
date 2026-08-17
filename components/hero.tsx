import Image from 'next/image'
import { Sparkles, Star } from 'lucide-react'

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="relative h-[62vh] min-h-[380px] w-full sm:h-[74vh]">
        <Image
          src="/hero-hills.png"
          alt="Green rolling hills under a bright blue summer sky"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/35"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center px-4 pb-4 sm:pb-8">
          <div className="relative flex items-baseline gap-2 sm:gap-5">
            <Sparkles
              aria-hidden="true"
              className="absolute -top-4 -left-5 size-6 text-primary-foreground drop-shadow-[0_2px_4px_rgba(40,20,60,0.45)] sm:-top-6 sm:-left-10 sm:size-9"
            />
            <Star
              aria-hidden="true"
              className="absolute -top-1 -right-3 size-4 text-primary-foreground drop-shadow-[0_2px_4px_rgba(40,20,60,0.45)] sm:size-6"
            />
            <h1 className="font-serif bg-gradient-to-b from-primary via-primary/75 to-primary-foreground bg-clip-text pr-2 text-[18vw] leading-[1] text-transparent italic drop-shadow-[0_3px_10px_rgba(40,20,60,0.35)] sm:text-[14vw] lg:text-[10rem]">
              Portfolio
            </h1>
            <p className="text-xs font-medium tracking-[0.35em] text-primary-foreground uppercase drop-shadow-[0_1px_3px_rgba(40,20,60,0.55)] sm:text-base">
              2026
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

const NAV = [
  { label: 'About Me', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function TickerNav() {
  const run = [...NAV, ...NAV, ...NAV]

  return (
    <nav
      aria-label="Primary"
      className="relative overflow-hidden border-y border-primary bg-primary py-2.5"
    >
      <ul className="animate-ticker flex w-max items-center gap-10 pr-10">
        {[...run, ...run].map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-10">
            <a
              href={item.href}
              tabIndex={i < NAV.length ? 0 : -1}
              aria-hidden={i >= NAV.length || undefined}
              className="text-[0.7rem] font-medium tracking-[0.28em] whitespace-nowrap text-primary-foreground uppercase transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none"
            >
              {item.label}
            </a>
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary-foreground/60"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
