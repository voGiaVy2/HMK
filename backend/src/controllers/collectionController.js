import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/collections.json');

// GET /api/collections
export const getCollections = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    const collections = JSON.parse(raw);

    res.json({
      success: true,
      count: collections.length,
      data: collections
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi máy chủ khi lấy bộ sưu tập', error: error.message });
  }
};
