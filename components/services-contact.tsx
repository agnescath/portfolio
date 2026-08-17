import { ArrowUpRight, AtSign, Mail, MapPin } from 'lucide-react'
import { CutOut, NotebookCard, TornNote } from './scrapbook'

const SERVICES = [
  {
    title: 'Brand Identity',
    body: 'Logo, palette, type system and a small kit of assets you can actually use.',
  },
  {
    title: 'Packaging',
    body: 'Labels, pouches, boxes and stickers — dielines included, printer-ready.',
  },
  {
    title: 'Food Styling',
    body: 'Prop sourcing, plating and shoot direction for menus and campaigns.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-4 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="services-heading"
          className="font-serif text-center text-4xl text-primary sm:text-5xl"
        >
          On the Menu
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <li key={service.title}>
              <TornNote className={i % 2 ? 'rotate-[1.4deg]' : '-rotate-[1.2deg]'}>
                <h3 className="font-serif text-3xl leading-none text-secondary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {service.body}
                </p>
              </TornNote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
    >
      <CutOut
        src="/food-waffle.png"
        alt="Waffles"
        decorative
        width={260}
        height={260}
        className="absolute bottom-6 left-2 hidden w-36 -rotate-[10deg] lg:block"
      />
      <CutOut
        src="/food-fries.png"
        alt="Fries"
        decorative
        width={220}
        height={220}
        className="absolute top-10 right-3 hidden w-28 rotate-[12deg] lg:block"
      />

      <NotebookCard
        className="mx-auto max-w-2xl rotate-[1deg] px-4 py-10 text-center sm:px-10"
      >
        <h2 id="contact-heading" className="font-serif text-5xl text-primary sm:text-6xl">
          Let&apos;s Eat
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground/80">
          Booking brand and packaging projects for 2026. Send a note about what you&apos;re
          building and I&apos;ll reply within two days.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@mikadelgado.ph"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            <Mail aria-hidden="true" className="size-4" />
            hello@mikadelgado.ph
          </a>
          <a
            href="https://instagram.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            <AtSign aria-hidden="true" className="size-4" />
            @mikaplates
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <p className="mt-7 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin aria-hidden="true" className="size-3.5" />
          Quezon City, Philippines
        </p>
      </NotebookCard>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-primary bg-primary px-4 py-6 text-center">
      <p className="text-[0.65rem] tracking-[0.28em] text-primary-foreground/80 uppercase">
        Mika Delgado &middot; Portfolio 2026 &middot; Made on a picnic blanket
      </p>
    </footer>
  )
}
