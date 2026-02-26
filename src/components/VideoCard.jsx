const monthNames = ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр'] // o‘zbekcha oy nomlari
function formatDate(dateStr) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  const day = d.getDate()
  const month = monthNames[d.getMonth()]
  const year = d.getFullYear()
  return `${day} ${month} ${year}`
}

export default function VideoCard({ title, category, date, thumbnail, videoUrl }) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
    >
      <div className="relative aspect-video shrink-0 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-islamic-green/90 px-2 py-1 text-xs font-medium text-white">
          {category}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-medium leading-snug text-islamic-green line-clamp-2 min-h-[3.25rem] group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {date ? formatDate(date) : ''}
        </p>
        <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-medium text-gold transition group-hover:gap-2">
          Кўриш
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </a>
  )
}
