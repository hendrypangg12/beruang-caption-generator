# Beruang Catat Keuangan — Generator Caption & Hashtag Instagram

Aplikasi web sederhana untuk membuat **caption marketing** dan **set hashtag** Instagram untuk brand **Beruang Catat Keuangan** (aplikasi catat keuangan / finance tracking).

> **Catatan:** Ini adalah *slice* pertama dari rencana automator post Instagram. Saat ini **hanya generate caption + hashtag** — belum ada posting otomatis ke Instagram API.

## Fitur

- Pilih topik/sudut konten (tips hemat, investasi pemula, mindset uang, promo produk, dll.)
- Isi catatan/produk opsional
- Generate **3 varian caption** berbahasa Indonesia (nada hangat & marketing untuk app catat keuangan)
- Set hashtag campuran: `#BeruangCatatKeuangan`, `#Beruang` + hashtag keuangan/IG relevan
- Tombol **salin ke clipboard** untuk caption dan hashtag
- UI modern, mobile-friendly, tanpa build step

## Cara membuka

1. Clone atau unduh repo ini
2. Buka file `index.html` di browser (double-click, atau drag ke Chrome/Firefox/Safari)
3. Atau jalankan server lokal sederhana:

```bash
# Python
python3 -m http.server 8080

# lalu buka http://localhost:8080
```

Tidak perlu Node.js, npm, atau bundler.

## Cara pakai

1. Pilih **topik / sudut konten**
2. (Opsional) tulis catatan atau detail produk di kolom bawah
3. Klik **Generate 3 caption**
4. Salin caption yang paling cocok + salin hashtag set
5. Tempel ke Instagram saat membuat post/story/reel

## Struktur file

```
beruang-caption-generator/
├── index.html   # Halaman utama
├── style.css    # Styling
├── app.js       # Logika generator
└── README.md
```

## Rencana berikutnya (bukan bagian repo ini)

- Integrasi jadwal posting
- Koneksi Instagram Graph API (butuh akun bisnis + token)
- Template visual / carousel

## Lisensi

Bebas dipakai untuk keperluan marketing Beruang Catat Keuangan.
