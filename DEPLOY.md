# Ҳидоят ТВ — Internetda demo qilish

**GitHub repo:** https://github.com/Aliddin44/hidoyattv

---

## GitHub Pages (GitHub’da qoladi — tavsiya)

Sayt to‘g‘ridan-to‘g‘ri GitHub’da host qilinadi, link: **https://aliddin44.github.io/hidoyattv/**

### Bir marta sozlash

1. Repo oching: **https://github.com/Aliddin44/hidoyattv**
2. **Settings** → chapdan **Pages**.
3. **Build and deployment** bo‘limida:
   - **Source:** **GitHub Actions** ni tanlang.
4. Hech narsa saqlamasangiz ham bo‘ladi — workflow allaqachon qo‘shilgan.

### Deploy qilish

- `main` branch’ga **push** qilsangiz, avtomatik build va deploy bo‘ladi (1–2 daqiqa).
- **Actions** tab’da workflow natijasini ko‘rishingiz mumkin.
- Tayyor sayt: **https://aliddin44.github.io/hidoyattv/**

Barcha jarayon GitHub ichida, Netlify kerak emas.

---

## Netlify’da deploy (ixtiyoriy)

### A) GitHub orqali (tavsiya — bir marta ulasiz, keyin avtomatik)

1. Brauzerda **https://app.netlify.com** oching. **Sign up** / **Log in** (GitHub bilan kirish mumkin).
2. **Add new site** → **Import an existing project** bosing.
3. **Connect to Git provider** → **GitHub** ni tanlang. Agar GitHub avval ulanmagan bo‘lsa, **Authorize Netlify** qiling.
4. Repo ro‘yxatidan **Aliddin44/hidoyattv** ni tanlang (yoki **Configure Netlify on GitHub** dan keyin qidiring: `hidoyattv`).
5. **Branch to deploy:** `main` qolsin.
6. **Build settings** (quyidagilarni tekshiring):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`  
   (Agar **Publish directory** bo‘sh bo‘lsa, qo‘lda `dist` yozing.)
7. **Deploy site** bosing. 1–2 daqiqadan keyin **Site deploy successful** va sizga `https://...netlify.app` link beriladi.

Keyingi safar `git push` qilsangiz, Netlify avtomatik yangi deploy qiladi.

---

### B) Qo‘lda yuklash (GitHub ishlamasa)

1. Loyihada: `npm run build` bajarilgan bo‘lsin (ichida `dist` papkasi paydo bo‘ladi).
2. **https://app.netlify.com/drop** ni oching.
3. `dist` papkasidagi **barcha fayllarni** (index.html va `assets` papkasi) sudrab, Netlify Drop maydoniga tashlang (yoki `dist` papkani o‘zi tashlang — brauzer qo‘llab-quvvatlasa).
4. Tugagach, sizga `https://...netlify.app` link beriladi.

**Eslatma:** Qo‘lda yuklashda har safar o‘zgartirganda qayta build qilib, `dist` ni qayta tashlash kerak. GitHub ulab qo‘ysangiz, faqat `git push` yetadi.

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
