// Ҳидоят ТВ — content & links

export const site = {
  name: 'Ҳидоят ТВ',
  subtitle: 'Ҳақ йўлидаги маърифат манбаи',
  org: 'Ўзбекистон Муфзияти rasmiy hamkori',
}

// YouTube — Ҳидоят ТВ: VTG_TeiJ3zQ | Live: Makka — https://www.youtube.com/watch?v=nl4SyoGqNGQ
export const youtube = {
  channelUrl: 'https://www.youtube.com/watch?v=VTG_TeiJ3zQ',
  liveEmbedId: 'nl4SyoGqNGQ', // Makka Live
  liveUrl: 'https://www.youtube.com/watch?v=nl4SyoGqNGQ',
  isLive: true,
  liveLabel: 'Makka Live – Ҳозир эфирда',
}

export const categories = [
  { id: 'tafsir', label: "Тафсир", icon: '📖', slug: 'tafsir' },
  { id: 'hadis', label: 'Хадис', icon: '📜', slug: 'hadis' },
  { id: 'juma', label: "Жума маърузалари", icon: '🕌', slug: 'juma' },
  { id: 'maxsus', label: "Махсус кўрсатувлар", icon: '⭐', slug: 'maxsus' },
  { id: 'yangiliklar', label: 'Янгиликлар', icon: '📰', slug: 'yangiliklar' },
]

// Latest programs — har biri boshqa rasm va link (1-karta: sizning video, 2–4: placeholder; haqiqiy videolar qo‘shilganda videoId/thumbnail/videoUrl ni yangilang)
export const latestVideos = [
  {
    id: '1',
    title: 'Тафсир: Сура Аль-Бақара',
    category: 'Тафсир',
    date: '2025-02-25',
    thumbnail: 'https://img.youtube.com/vi/VTG_TeiJ3zQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=VTG_TeiJ3zQ',
  },
  {
    id: '2',
    title: 'Хадис шарҳи — Саҳиҳи Бухорий',
    category: 'Хадис',
    date: '2025-02-24',
    thumbnail: 'https://picsum.photos/seed/hadis-2/640/360',
    videoUrl: 'https://www.youtube.com/watch?v=VTG_TeiJ3zQ',
  },
  {
    id: '3',
    title: 'Жума маърузаси — Тошкент',
    category: "Жума маърузалари",
    date: '2025-02-21',
    thumbnail: 'https://picsum.photos/seed/juma-3/640/360',
    videoUrl: 'https://www.youtube.com/watch?v=VTG_TeiJ3zQ',
  },
  {
    id: '4',
    title: 'Рамазон тайёрлик дастури',
    category: 'Махсус кўрсатувлар',
    date: '2025-02-20',
    thumbnail: 'https://picsum.photos/seed/ramazon-4/640/360',
    videoUrl: 'https://www.youtube.com/watch?v=VTG_TeiJ3zQ',
  },
]

export const contact = {
  phone: '+998 71 123 45 67',
  phoneLink: 'tel:+998711234567',
  email: 'info@hidoyat.uz',
  emailLink: 'mailto:info@hidoyat.uz',
  address: 'Тошкент ш., Ўзбекистон Муфзияти',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.758848389931!2d69.279374!3d41.311081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a472bddb%3A0x4e3d0e2e7a5b6c7d!2sTashkent!5e0!3m2!1sen!2s!4v1234567890',
  social: [
    { name: 'YouTube', url: 'https://www.youtube.com/@HidoyatTV', icon: 'youtube' },
    { name: 'Telegram', url: 'https://t.me/hidoyattv', icon: 'telegram' },
  ],
}

export const about = {
  mission: 'Ҳидоят ТВ — Ўзбекистон Муфзияти rasmiy hamkori sifatida ҳақиқий исломий таълимот ва маърифатни кенг оммага етказиш мақсадида ишлайди.',
  vision: 'Хар бир кўрувчига руҳий тинчлик ва тушунча бериш, динга доир саводли ва ишончли манба бўлиш.',
  message: 'Бизнинг барча дастурларимиз аҳли суннат вал жамоат ақидаси асосида тайёрланади ва расмий уламоларимиз томонидан тасдиқланади.',
}
