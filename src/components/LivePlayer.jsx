import { youtube } from '../data/content'

const embedUrl = `https://www.youtube.com/embed/${youtube.liveEmbedId}?autoplay=0`

export default function LivePlayer() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-soft-lg ring-2 ring-gold/20">
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title="Makka Live — Масжидул Ҳаром"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
            youtube.isLive
              ? 'bg-red-600/90 text-white shadow-glow'
              : 'bg-gray-700/90 text-gray-200'
          }`}
        >
          <span className={`h-2 w-2 rounded-full ${youtube.isLive ? 'animate-pulse bg-white' : 'bg-gray-400'}`} />
          {youtube.isLive ? (youtube.liveLabel || 'Live – Ҳозир эфирдамиз') : 'Live эмас'}
        </span>
      </div>
    </div>
  )
}
