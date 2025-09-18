//const express = require("express"); //lamar paquete con commonjs

import express from "express"; //llamar paquetes con ESM(ecma script module)
import { users } from './src/data/users.js';
import usersRoutes from './src/routes/usersRoutes.js';
import { products } from './src/data/products.js';
import productRoutes from './src/routes/productRoutes.js';
import dotenv from 'dotenv';
import conectarDB from './src/config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
console.log("PORT: ", PORT);

conectarDB();


app.use(express.json()) //middleware para parsear json


console.log(users);
console.log(products)

app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
})

