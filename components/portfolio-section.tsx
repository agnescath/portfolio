import { PhotoScrap, Tape } from './scrapbook'

const WORK = [
  {
    src: '/work-branding.png',
    title: 'Casa Verde',
    kind: 'Brand Identity',
    year: '2025',
    tilt: '-rotate-[2.5deg]',
  },
  {
    src: '/work-poster.png',
    title: 'Mercado Fest',
    kind: 'Poster Series',
    year: '2025',
    tilt: 'rotate-[2deg]',
  },
  {
    src: '/work-packaging.png',
    title: 'Tita Snacks',
    kind: 'Packaging',
    year: '2024',
    tilt: 'rotate-[1.5deg]',
  },
  {
    src: '/work-editorial.png',
    title: 'Sobremesa',
    kind: 'Editorial',
    year: '2024',
    tilt: '-rotate-[1.8deg]',
  },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="shadow-photo bg-card mx-auto w-fit -rotate-[1deg] rounded-full border border-border px-8 py-2">
          <h2
            id="portfolio-heading"
            className="font-serif text-4xl text-primary sm:text-5xl"
          >
            Portfolio
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-foreground/80">
          Four plates from the last two years &mdash; laid out the way they came off the
          table.
        </p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
          {WORK.map((item) => (
            <li key={item.title} className={`relative ${item.tilt}`}>
              <Tape className="-top-3 left-8 z-10" />
              <PhotoScrap
                src={item.src}
                alt={`${item.title} — ${item.kind} project`}
                width={720}
                height={540}
                className="[&_img]:aspect-4/3 [&_img]:h-auto"
              />
              <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
                <div>
                  <h3 className="font-serif text-3xl leading-none text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {item.kind}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary">{item.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
