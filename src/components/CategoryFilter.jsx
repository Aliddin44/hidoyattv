import { useState } from 'react'
import { categories } from '../data/content'

export default function CategoryFilter() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section id="categories" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-serif text-3xl font-semibold text-islamic-green md:text-4xl">
          Дастурлар йўналишлари
        </h2>
        <div className="mt-3 h-1 w-20 rounded-full bg-gold" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              className={`flex flex-col items-center gap-3 rounded-2xl border-2 px-6 py-8 text-center transition-all duration-300 ${
                activeId === cat.id
                  ? 'border-gold bg-islamic-green/10 text-islamic-green'
                  : 'border-beige-dark bg-beige-light text-islamic-green hover:border-gold/50 hover:bg-islamic-green/5'
              }`}
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Йўналишни босинг — кейинчалик видеолар фильтрланади
        </p>
      </div>
    </section>
  )
}
