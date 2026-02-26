import { about } from '../data/content'

const PatternDecoration = () => (
  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-beige-dark md:h-80">
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40z' fill='%230F3D2E' fill-opacity='0.15'/%3E%3Cpath d='M40 20L60 40L40 60L20 40z' fill='%23C9A227' fill-opacity='0.1'/%3E%3C/svg%3E")`,
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-serif text-6xl text-islamic-green/20 md:text-8xl">۞</span>
    </div>
  </div>
)

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-beige pattern-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-serif text-3xl font-semibold text-islamic-green md:text-4xl">
          Ҳидоят ТВ ҳақида
        </h2>
        <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <PatternDecoration />
          </div>
          <div className="order-1 space-y-6 md:order-2">
            <p className="text-islamic-green/90 leading-relaxed">{about.mission}</p>
            <p className="text-islamic-green/90 leading-relaxed">
              <strong className="text-islamic-green">Кўзгунимиз:</strong> {about.vision}
            </p>
            <p className="text-islamic-green/80 text-sm leading-relaxed">{about.message}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
