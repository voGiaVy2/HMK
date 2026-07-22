import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/products.json');

// GET /api/products
export const getProducts = (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    let products = JSON.parse(raw);

    const { category, material, shape, gender } = req.query;

    if (category) {
      products = products.filter(p => p.category === category);
    }
    if (material) {
      products = products.filter(p => p.material.toLowerCase().includes(material.toLowerCase()));
    }
    if (shape) {
      products = products.filter(p => p.shape.toLowerCase().includes(shape.toLowerCase()));
    }
    if (gender) {
      products = products.filter(p => p.gender.toLowerCase() === gender.toLowerCase() || p.gender === 'Unisex');
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi máy chủ khi lấy sản phẩm', error: error.message });
  }
};
