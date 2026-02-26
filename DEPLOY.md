# Ҳидоят ТВ — Internetda demo qilish

Loyihani bepul hostingda ko‘rsatish uchun quyidagi usullardan birini tanlang.

---

## 1️⃣ Vercel (tavsiya etiladi)

**Link:** https://vercel.com

1. https://vercel.com da hisob oching (GitHub yoki email bilan).
2. GitHub’da yangi repo oching va loyihani push qiling:
   ```bash
   git init
   git add .
   git commit -m "Hidoyat TV landing"
   git branch -M main
   git remote add origin https://github.com/Foydalanuvchi/hidoyat-tv.git
   git push -u origin main
   ```
3. Vercel’da **Add New Project** → GitHub reponi tanlang → **Deploy**.
4. 1–2 daqiqadan keyin sizga `https://hidoyat-tv-xxx.vercel.app` kabi link beriladi.

**Yoki** Vercel CLI orqali:
```bash
npm i -g vercel
npm run build
vercel
```
So‘rovlarga javob bering — loyiha avtomatik deploy qilinadi.

---

## 2️⃣ Netlify

**Link:** https://www.netlify.com

1. https://app.netlify.com da hisob oching.
2. **Add new site** → **Import an existing project** → GitHub reponi ulang.
3. Build settings (odatda avtomatik aniqlanadi):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy** bosing. Sizga `https://random-name.netlify.app` beriladi.

**Yoki** fayllarni tortib qo‘yish:
- `npm run build` qiling, keyin https://app.netlify.com/drop ga `dist` papkasini sudrab tashlang.

---

## 3️⃣ GitHub Pages

1. Reponi GitHub’ga push qiling.
2. **Settings** → **Pages** → Source: **GitHub Actions**.
3. Loyihada `.github/workflows/deploy.yml` bor — har `git push` da avtomatik build va deploy bo‘ladi.

Yoki qo‘lda: `npm run build` dan keyin `dist` ichidagi fayllarni `gh-pages` branch’iga yoki `docs/` papkasiga qo‘yib, Pages’da shu papkani tanlang.

---

## Buildni mahalliy tekshirish

Deploy qilishdan oldin:

```bash
npm run build
npm run preview
```

Brauzerda `http://localhost:4173` ni oching — production ko‘rinishini ko‘rasiz.

---

## Xulosa

| Xizmat      | Bepul | Qulaylik | Link formatı              |
|------------|-------|----------|---------------------------|
| **Vercel** | Ha    | ⭐⭐⭐     | loyiha.vercel.app         |
| **Netlify**| Ha    | ⭐⭐⭐     | loyiha.netlify.app        |
| **GitHub Pages** | Ha | ⭐⭐  | foydalanuvchi.github.io/repo |

Eng tez: **Vercel** yoki **Netlify** + GitHub repo ulab **Deploy** tugmasini bosish.
