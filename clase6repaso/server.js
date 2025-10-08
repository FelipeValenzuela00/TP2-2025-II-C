import express from 'express';
import nodemon from 'nodemon';
import { users } from './src/data/users.js';
import { products } from '../Clase-6/src/data/products.js';

import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';

import dotenv from 'dotenv';
import conectarDB from './src/config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

conectarDB();

app.use(express.json());

console.log(users);


app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
