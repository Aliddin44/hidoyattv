import { site, youtube } from '../data/content'
import LivePlayer from './LivePlayer'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-islamic-green pattern-bg px-4 pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-white/85 md:text-xl">
            {site.subtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gold" />
        </div>

        <div className="mt-8 md:mt-10">
          <LivePlayer />
        </div>

        <p className="mt-4 text-center text-sm text-white/70">
          {site.org}
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gold/20 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/30"
          >
            YouTube каналимиз
          </a>
        </div>
      </div>
    </section>
  )
}
