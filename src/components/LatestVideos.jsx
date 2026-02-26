import { latestVideos } from '../data/content'
import VideoCard from './VideoCard'

export default function LatestVideos() {
  return (
    <section id="videos" className="scroll-mt-20 bg-beige-light pattern-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-serif text-3xl font-semibold text-islamic-green md:text-4xl">
          Сўнгги дастурлар
        </h2>
        <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestVideos.map((video, i) => (
            <div
              key={video.id}
              className="flex h-full flex-col animate-fade-in opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <VideoCard
                title={video.title}
                category={video.category}
                date={video.date}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
