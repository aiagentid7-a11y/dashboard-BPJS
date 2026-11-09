import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// Library lokal agar Excel & grafik tetap jalan walau CDN diblokir
app.get('/vendor/xlsx.full.min.js', (_req, res) =>
  res.sendFile(path.join(__dirname, 'node_modules/xlsx/dist/xlsx.full.min.js')));
app.get('/vendor/chart.umd.min.js', (_req, res) =>
  res.sendFile(path.join(__dirname, 'node_modules/chart.js/dist/chart.umd.js')));

// Hanya index.html yang disajikan — package.json, server.js, dll. tidak ikut terbuka
app.get(['/', '/index.html'], (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const host = process.env.HOST || '0.0.0.0';
app.listen(PORT, host, () => console.log(`Server running at http://${host}:${PORT}`));
