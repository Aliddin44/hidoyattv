# Ҳидоят ТВ — Landing Page

Ўзбекистон Муфзияти rasmiy hamkoridagi **Ҳидоят ТВ** uchun ishonchli, jim, ruhiy va zamonaviy landing page.

## Texnologiyalar

- React 18 + Vite
- TailwindCSS
- Responsive, mobile-first

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda: [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Tuzilishi

- `src/components/` — HeroSection, LivePlayer, VideoCard, LatestVideos, CategoryFilter, AboutSection, ContactSection
- `src/components/layout/` — Navbar, Footer
- `src/data/content.js` — matnlar, linklar, YouTube ID, contact
- `src/hooks/useYouTube.js` — YouTube API integratsiyasi uchun tuzilma (API kalit qo‘shilsa ishlatiladi)

## O‘zgartirish

- **YouTube Live:** `src/data/content.js` da `youtube.liveEmbedId` va `youtube.channelUrl` ni haqiqiy ID/linkga almashtiring.
- **Contact:** `contact` obyektida telefon, email, manzil, xarita embed va ijtimoiy tarmoq linklarini yangilang.
- **Videolar:** `latestVideos` ga haqiqiy dasturlar (thumbnail, link, sana) qo‘shing.

## Reja

Batafsil reja: [PLAN.md](./PLAN.md)
