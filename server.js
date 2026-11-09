import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve local vendor scripts so external CDN blocks never break Excel or Charts
app.use('/vendor/xlsx.full.min.js', express.static(path.join(__dirname, 'node_modules/xlsx/dist/xlsx.full.min.js')));
app.use('/vendor/chart.umd.min.js', express.static(path.join(__dirname, 'node_modules/chart.js/dist/chart.umd.js')));

app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
