//const express = require("express"); //lamar paquete con commonjs

import express from "express"; //llamar paquetes con ESM(ecma script module)
import { users } from './src/data/users.js';
import usersRoutes from './src/routes/usersRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json()) //middleware para parsear json


console.log(users);

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
})

