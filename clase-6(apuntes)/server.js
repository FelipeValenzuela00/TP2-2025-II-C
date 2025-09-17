//const express = require("express"); //lamar paquete con commonjs

import express from "express"; //llamar paquetes con ESM(ecma script module)
import users from './src/data/users.js';

const PORT = 3000;
const app = express();

app.use(express.json()) //middleware para parsear json

app.get("/", (req, res) => {
    res.send("<h1>Home de la API</h1>")
});

app.get("/api/users", (req, res) => {
    res.json(users)
});


app.get("/api/user", (req, res) => {

    if (req.query.nombre) {
        let nombre = req.query.nombre.toLowerCase()

        const user = users.find((user) => {
            return user.nombre.toLowerCase() === nombre
        })
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({
                nombre: 'No existe',
            })
        }
    } else {
        res.status(400).json({
            error: 'Falta el nombre del usuario'
        })
    }

    app.listen(PORT, () => {
        console.log("Servidor corriendo en http://localhost:", PORT);
    });

});

app.use("")
console.log(users);