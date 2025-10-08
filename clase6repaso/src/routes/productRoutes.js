import express from 'express';

import { getProduct, createProduct } from '../controller/productController.js';
import { products } from '../data/products.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/', createProduct);

export default router;
