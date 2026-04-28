# Spreadsheet Maintenance Guide

Semua data portfolio bisa dikelola langsung dari spreadsheet.

## 1) Buat tab spreadsheet

Gunakan nama tab persis seperti ini:

- `Profile`
- `Projects`
- `Experience`
- `Achievements`
- `Skills`
- `Certifications`

## 2) Format kolom per tab

### `Profile` (1 baris)

| name | title | description | email | linkedin | whatsapp | instagram | photo |
|---|---|---|---|---|---|---|---|

Catatan `photo`: isi **nama file gambar saja**. Contoh: `profile-rizky.jpg`

### `Projects`

| title | description | tech_stack | highlights | image | demo_link | github_link |
|---|---|---|---|---|---|---|

Catatan `image`: isi nama file gambar project. Contoh: `project-fintech.jpg`

### `Experience`

| title | role | description | image |
|---|---|---|---|

### `Achievements`

| category | title | description | country_flag |
|---|---|---|---|

Nilai `category` yang valid:
- `Conference`
- `Competition`

### `Skills`

| name | logo |
|---|---|

Kolom `logo` bisa nama file lokal (contoh `skill-react.svg`) atau URL absolut jika diperlukan.

### `Certifications`

| title | issuer | image |
|---|---|---|

## 3) Simpan gambar di folder assets

Semua file gambar taruh di:

`public/assets`

Contoh:
- `public/assets/profile-rizky.jpg`
- `public/assets/project-fintech.jpg`
- `public/assets/skill-react.svg`

Aplikasi otomatis membaca nilai spreadsheet menjadi path:

- `profile-rizky.jpg` -> `/assets/profile-rizky.jpg`

## 4) Hubungkan ke aplikasi

Di `.env` isi:

`GOOGLE_SHEET_ID=<ID_SPREADSHEET_ANDA>`

Cara ambil ID:

`https://docs.google.com/spreadsheets/d/<ID_INI>/edit`

Spreadsheet harus bisa diakses publik (minimal mode view), agar server bisa mengambil datanya.

## 4.1) Troubleshooting kalau data belum berubah

- Pastikan URL spreadsheet bisa diakses publik: `Anyone with the link -> Viewer`.
- Pastikan nama tab sama persis: `Profile`, `Projects`, `Experience`, `Achievements`, `Skills`, `Certifications`.
- Setelah ubah `.env`, restart dev server (`Ctrl + C`, lalu `npm run dev`).
- Di mode development, cache sudah dimatikan otomatis. Untuk jaga-jaga, hard refresh browser (`Ctrl + Shift + R`).
- Jika tab pengalaman kamu bernama `Experiences`, sekarang sudah didukung juga.

## 5) Dummy CSV siap copas

Paste setiap blok CSV ke tab yang sesuai.

### `Profile`

```csv
name,title,description,email,linkedin,whatsapp,instagram,photo
Ahmad Rizky,Senior UI/UX Designer & Frontend Engineer,"Berpengalaman 5+ tahun membangun produk digital fokus usability, performa, dan desain modern.",rizky@example.com,https://linkedin.com/in/rizky,https://wa.me/628123456789,https://instagram.com/rizky,profile-rizky.jpg
```

### `Projects`

```csv
title,description,tech_stack,highlights,image,demo_link,github_link
FinTech Dashboard Pro,"Dashboard keuangan personal dengan analitik real-time.",Next.js|Tailwind|Recharts,"Realtime analytics,2FA security,40% performance boost",project-fintech.jpg,https://demo-fintech.example.com,https://github.com/yourname/fintech-dashboard
E-Commerce Luxe App,"Aplikasi ecommerce premium dengan pengalaman belanja personal.",React Native|Firebase|Stripe,"AR preview,Multi-currency checkout,10k+ users",project-ecommerce.jpg,https://demo-ecommerce.example.com,https://github.com/yourname/ecommerce-luxe
Healthcare Smart Portal,"Portal manajemen pasien dan jadwal konsultasi.",Next.js|Node.js|PostgreSQL,"Encrypted records,Role-based access,Hospital integration",project-healthcare.jpg,https://demo-healthcare.example.com,https://github.com/yourname/healthcare-portal
Portfolio Artist Template,"Template portfolio modern untuk kreator visual.",Next.js|Framer Motion|Tailwind,"SEO ready,Responsive layout,Easy CMS integration",project-artist.jpg,https://demo-artist.example.com,https://github.com/yourname/portfolio-artist
```

### `Experience`

```csv
title,role,description,image
Creative Tech Solutions Inc.,Lead UI/UX Designer,"Memimpin tim desain untuk proyek enterprise multi-industri.",exp-creative-tech.png
Global Digital Agency,Senior Frontend Developer,"Membangun arsitektur frontend modular dan scalable.",exp-global-digital.png
Inovasi Nusantara Startup,UI Engineer,"Kolaborasi lintas tim dalam pengembangan design system.",exp-inovasi-nusantara.png
Freelance Creative,Brand Identity Designer,"Membantu UMKM membangun identitas visual digital.",exp-freelance-creative.png
```

### `Achievements`

```csv
category,title,description,country_flag
Conference,Google I/O Extended Jakarta 2024,"Speaker: Building Accessible Design Systems.",🇮🇩
Competition,Asia Design Hackathon 2023,"Juara 1 kategori Sustainable Design.",🇸🇬
Conference,Tech Conference Bali 2023,"Panelis: Future of AI for Designers.",🇮🇩
Competition,Global UX Challenge 2022,"Top 5 Finalist kategori Edutech.",🇺🇸
```

### `Skills`

```csv
name,logo
Figma,skill-figma.svg
React,skill-react.svg
Next.js,skill-nextjs.svg
Tailwind CSS,skill-tailwind.svg
TypeScript,skill-typescript.svg
Node.js,skill-nodejs.svg
Firebase,skill-firebase.svg
Git,skill-git.svg
```

### `Certifications`

```csv
title,issuer,image
Google UX Design Professional,Coursera,cert-google-ux.png
AWS Certified Developer - Associate,Amazon Web Services,cert-aws-dev.png
Meta Front-End Developer Professional,Meta,cert-meta-frontend.png
Advanced Product Design,Interaction Design Foundation,cert-ixdf-product-design.png
```
