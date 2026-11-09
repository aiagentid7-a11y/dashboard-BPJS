# Dashboard BPJS

Dashboard web untuk mengolah formulir BPJS Kesehatan (eDABU) dan BPJS Tenaga Kerja — validasi, isi, dan unduh kembali sebagai Excel dengan struktur template asli.

**Buka live:** https://aiagentid7-a11y.github.io/dashboard-BPJS/

Versi: v9 (9 November 2026)

## Fitur

- **7 formulir eDABU:** PESERTA, ANGKEL, MUTASI, IDENTITAS, PEKERJAAN, PENONAKTIFAN, GAJI
- **Validasi eDABU:** JKN 13 digit, NIK/KK 16 digit, Kode Desa 5 karakter, HP 8–15 digit, email, Faskes 8 digit, aturan PHK + backdate maks 6 bulan
- **SPTJM PHK Form 1–4** + pratinjau surat siap cetak (A4)
- **BPJS Tenaga Kerja:** NA Massal (SEBAB A1–A10), Koreksi Data TK, Koreksi PKWT, TK Baru
- **Surat PHK Format 1–4** + menu Surat & Arsip
- **Multi-perusahaan** (tambah lewat Pengaturan atau impor file berkop) + mode gelap/terang
- **Ringkasan:** KPI, grafik, hitung mundur jatuh tempo, rekap iuran

## Cara pakai

1. Buka dashboard lewat link live di atas, atau buka `index.html` langsung di browser.
2. Upload file template Excel, atau isi manual lewat formulir.
3. Perbaiki baris yang ditandai bermasalah, lalu unduh Excel bersih (struktur template asli dipertahankan).
4. Unggah file hasil unduhan ke eDABU / SIPP seperti biasa.

## Penting

- Data pegawai hanya tersimpan selama tab browser dibuka — **unduh Excel bersih sebelum menutup tab**, termasuk arsip surat. Browser akan memperingatkan bila masih ada data saat tab ditutup.
- Pengaturan perusahaan (nama, kode BU, VA, bank, faskes, pimpinan) disimpan di localStorage browser masing-masing, **bukan di kode/repo**. Isi lewat menu Pengaturan.
- Batas ukuran file unggahan: 10 MB.
- Dashboard ini satu file HTML; grafik memakai Chart.js dan baca/tulis Excel memakai SheetJS dari CDN (butuh internet).
- Jangan commit data karyawan asli ke repo ini — pakai data contoh fiktif bila perlu demo.

## Teknologi

- HTML/CSS/JS tunggal, tanpa build step
- SheetJS 0.20.3 (dari cdn.sheetjs.com) + Chart.js 4.4.1 via CDN; untuk server lokal: `npm install && npm start` (pustaka disajikan dari `/vendor`)
