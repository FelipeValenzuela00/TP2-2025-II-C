//const express = require("express"); //lamar paquete con commonjs
import express from "express"; //llamar paquetes con ESM(ecma script module)


const PORT = 3000;
const app = express();

app.use(express.json()) //middleware para parsear json

app.get("/", (req, res) => {
    res.send("<h1>Home de la API</h1>")
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
}); 