import Image from 'next/image'
import { GraduationCap, Mail, Phone } from 'lucide-react'
import { CutOut, NotebookCard, PhotoScrap, Tape, TornNote } from './scrapbook'

const TOOLS = [
  { abbr: 'Fi', name: 'Figma', tile: 'bg-secondary' },
  { abbr: 'Ai', name: 'Illustrator', tile: 'bg-accent' },
  { abbr: 'Ps', name: 'Photoshop', tile: 'bg-primary' },
  { abbr: 'Id', name: 'InDesign', tile: 'bg-secondary/80' },
  { abbr: 'Lr', name: 'Lightroom', tile: 'bg-primary/70' },
]

const SKILLS = [
  'Brand Identity',
  'Packaging',
  'Food Styling',
  'Art Direction',
  'Editorial Layout',
  'Type Setting',
  'Prop Sourcing',
]

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
    >
      {/* scattered atmosphere */}
      <CutOut
        src="/food-fries.png"
        alt="Cone of french fries"
        decorative
        width={260}
        height={260}
        className="absolute -top-4 right-2 w-28 rotate-[9deg] sm:w-40 lg:w-52"
      />
      <CutOut
        src="/food-drink.png"
        alt="Glass of iced lemonade"
        decorative
        width={220}
        height={220}
        className="absolute right-4 bottom-24 hidden w-32 -rotate-[7deg] lg:block"
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* main notebook */}
        <div className="relative">
          <CutOut
            src="/basket-fruit.png"
            alt="Wicker basket of fruit"
            decorative
            width={420}
            height={420}
            className="absolute -top-12 right-2 z-10 w-24 rotate-[6deg] sm:-top-16 sm:-right-8 sm:w-36"
          />
          <NotebookCard className="rotate-[-1.4deg] px-4 py-8 sm:px-8 sm:py-10">
            <Tape className="-top-3 left-1/3" />
            <h2
              id="about-heading"
              className="font-serif text-5xl leading-none text-primary sm:text-6xl"
            >
              About Me
            </h2>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image
                src="/profile.png"
                alt="Portrait of Mika Delgado"
                width={200}
                height={200}
                className="size-24 shrink-0 rounded-full border-4 border-background object-cover shadow-photo sm:size-28"
              />
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-foreground sm:text-base">
                  Hi, I&apos;m <strong className="font-semibold">Mika Delgado</strong> — a
                  graphic designer and food stylist based in Manila. I build brands you
                  want to sit down and eat with: warm, tactile, a little bit messy on
                  purpose.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Five years of packaging, posters and editorial work for cafés, farmers
                  markets and small-batch makers.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                <Mail aria-hidden="true" className="size-4" />
                Contact Me
              </a>
              <a
                href="tel:+639171234567"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                <Phone aria-hidden="true" className="size-4" />
                +63 917 123 4567
              </a>
            </div>
          </NotebookCard>
        </div>

        {/* side stack */}
        <div className="flex flex-col gap-6">
          <TornNote className="rotate-[1.6deg]">
            <h3 className="font-serif text-3xl text-secondary">Education</h3>
            <p className="mt-2 text-sm font-semibold">BFA Visual Communication</p>
            <p className="text-xs text-muted-foreground">
              University of the Philippines &middot; 2017&ndash;2021
            </p>
          </TornNote>

          <div className="shadow-photo relative -rotate-[2deg] overflow-hidden rounded-md border border-border bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase opacity-70">
                  Language
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Filipino &mdash; Native</li>
                  <li>English &mdash; Fluent</li>
                  <li>Japanese &mdash; Basic</li>
                </ul>
              </div>
              <GraduationCap aria-hidden="true" className="size-8 opacity-80" />
            </div>
            <div
              aria-hidden="true"
              className="mt-4 truncate font-mono text-[0.6rem] tracking-[0.2em] opacity-50"
            >
              P&lt;PHLDELGADO&lt;&lt;MIKA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            </div>
          </div>

          <div className="shadow-photo rotate-[1deg] rounded-md border border-foreground/20 bg-foreground px-5 py-4 text-background">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase opacity-60">
              Job Experience
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <p className="font-semibold">Art Director &mdash; Salt &amp; Sun Studio</p>
                <p className="text-xs opacity-60">2023 &ndash; Present</p>
              </li>
              <li>
                <p className="font-semibold">Designer &mdash; Pantry Collective</p>
                <p className="text-xs opacity-60">2021 &ndash; 2023</p>
              </li>
            </ul>
          </div>
        </div>

        {/* expertise + skills */}
        <div className="lg:col-span-2">
          <div className="shadow-photo bg-card paper relative rounded-2xl border border-border px-5 py-7 sm:px-8">
            <PhotoScrap
              src="/food-waffle.png"
              alt="Stack of waffles with strawberries"
              caption="fieldwork"
              width={320}
              height={320}
              className="absolute -top-10 -right-4 hidden w-32 rotate-[7deg] sm:block"
            />
            <h3 className="font-serif text-4xl text-primary">Area of Expertise</h3>
            <ul className="mt-5 flex flex-wrap gap-4">
              {TOOLS.map((tool) => (
                <li key={tool.name} className="flex flex-col items-center gap-1.5">
                  <span
                    className={`grid size-11 place-items-center rounded-lg text-sm font-bold text-primary-foreground ${tool.tile}`}
                  >
                    {tool.abbr}
                  </span>
                  <span className="text-[0.65rem] tracking-wide text-muted-foreground">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-serif mt-8 text-4xl text-secondary">Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 text-xs font-medium text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
