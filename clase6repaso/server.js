import express from 'express';
import nodemon from 'nodemon';
import { users } from './src/data/users.js';
import { products } from '../Clase-6/src/data/products.js';

import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());

console.log(users);


app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
