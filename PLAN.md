# Ҳидоят ТВ — Landing Page Plan

## Maqsad
Muslim Board rasmiy hamkoridagi **Ҳидоят ТВ** uchun ishonchli, jim, ruhiy va zamonaviy Islamic uslubidagi landing page.

---

## 1. Texnologiya stack

| Texnologiya | Vazifasi |
|-------------|----------|
| **React 18** | UI framework |
| **Vite** | Build tool |
| **TailwindCSS** | Styling |
| **React Router** | Sektional scroll (agar kerak bo‘lsa) |

---

## 2. Ranglar va tipografiya

- **Primary:** Deep Islamic Green `#0F3D2E`, Oq `#FFFFFF`
- **Accent:** Soft Gold `#C9A227`
- **Background:** Juda och yashil / bej bo‘laklar
- **Heading:** Serif yoki semi-serif (masalan: Playfair Display, Lora)
- **Body:** Toza sans-serif (Inter, Nunito Sans)

---

## 3. Sahifa tuzilishi (sections)

| # | Section | Komponent | Asosiy kontent |
|---|---------|-----------|----------------|
| 1 | Hero | `HeroSection` + `LivePlayer` | Logo, subtitle, YouTube Live iframe, Live badge |
| 2 | Latest Videos | `LatestVideos` + `VideoCard` | “Сўнгги дастурлар” — 3–4 ustunli grid |
| 3 | Categories | `CategoryFilter` | “Дастурлар йўналишлари” — Tafsir, Hadis, Juma, Maxsus, Yangiliklar |
| 4 | About | `AboutSection` | “Ҳидоят ТВ ҳақида” — ikki ustun, pattern + matn |
| 5 | Contact | `ContactSection` | Telefon, email, manzil, xarita, ijtimoiy tarmoqlar |
| 6 | Footer | `Footer` | Qorong‘i yashil, minimal, copyright, linklar |

---

## 4. Komponentlar ro‘yxati

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky navbar
│   │   └── Footer.jsx
│   ├── HeroSection.jsx
│   ├── LivePlayer.jsx       # YouTube iframe + Live badge
│   ├── VideoCard.jsx
│   ├── LatestVideos.jsx
│   ├── CategoryFilter.jsx
│   ├── AboutSection.jsx
│   └── ContactSection.jsx
├── hooks/
│   └── useYouTube.js        # YouTube API tuzilishi
├── data/
│   └── content.js           # Kategoriyalar, videolar, contact
├── assets/
│   └── patterns/            # SVG Islamic pattern (yengil texture)
├── App.jsx
└── index.css
```

---

## 5. UX talablar

- Mobil-first, to‘liq responsive
- Sticky navbar
- Sektional smooth scroll
- Juda yengil fade-in animatsiyalar
- Hover: yumshoq scale, shadow, gold accent

---

## 6. Rasmlar va linklar

- **Logo:** Matnli “Ҳидоят ТВ” (yoki kelajakda SVG logo)
- **YouTube:** Live iframe + kanal linki
- **Ijtimoiy:** YouTube, Telegram ikonkalari va linklar
- **Xarita:** Google Maps embed (Toshkent / Muslim Board manzili)
- **Placeholder rasmlar:** Video thumbnaillar uchun placeholder yoki YouTube thumbnail URL

---

## 7. SEO

- `index.html`: title, description, og:image
- React Helmet yoki oddiy meta taglar

---

## 8. Keyingi qadamlar

1. Vite + React + Tailwind loyihasini yaratish
2. Navbar va Footer
3. HeroSection + LivePlayer
4. LatestVideos + VideoCard
5. CategoryFilter
6. AboutSection, ContactSection
7. Islamic pattern (SVG/CSS), ranglar, animatsiyalar
8. Content (matnlar, linklar, placeholder rasmlar) va SEO
