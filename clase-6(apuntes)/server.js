//const express = require("express"); //lamar paquete con commonjs

import express from "express"; //llamar paquetes con ESM(ecma script module)
import { users } from './src/data/users.js';
import usersRoutes from './src/routes/usersRoutes.js';
import { products } from './src/data/products.js';
import productRoutes from './src/routes/productRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json()) //middleware para parsear json


console.log(users);
console.log(products)

app.use("/api/users", usersRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
})

