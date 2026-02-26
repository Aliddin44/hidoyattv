import { contact } from '../data/content'

const IconPhone = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)
const IconMail = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const IconLocation = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const IconYouTube = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)
const IconTelegram = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

export default function ContactSection() {
  const iconMap = { youtube: IconYouTube, telegram: IconTelegram }
  return (
    <section id="contact" className="scroll-mt-20 bg-beige-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-serif text-3xl font-semibold text-islamic-green md:text-4xl">
          Боғланиш
        </h2>
        <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <a
              href={contact.phoneLink}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-soft-lg"
            >
              <span className="text-gold">
                <IconPhone />
              </span>
              <div>
                <p className="text-sm text-gray-500">Телефон</p>
                <p className="font-medium text-islamic-green">{contact.phone}</p>
              </div>
            </a>
            <a
              href={contact.emailLink}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-soft-lg"
            >
              <span className="text-gold">
                <IconMail />
              </span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-islamic-green">{contact.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft">
              <span className="text-gold">
                <IconLocation />
              </span>
              <div>
                <p className="text-sm text-gray-500">Манзил</p>
                <p className="font-medium text-islamic-green">{contact.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              {contact.social.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-islamic-green text-gold transition hover:bg-islamic-green-light hover:text-white"
                    aria-label={s.name}
                  >
                    {Icon && <Icon />}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              src={contact.mapEmbed}
              title="Ҳидоят ТВ манзили"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
