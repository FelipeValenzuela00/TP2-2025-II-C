import { users } from "../data/users.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {


    try {
        const user = await User.find()
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

export const getUsersSearch = async (req, res) => {


    const { nombre } = req.query;

    try {
        const user = await User.find({
            nombre: {
                $regex: `^${nombre}`,
                $options: 'i'
            }
        })
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }

}

export const CreateUser = async (req, res) => {

    console.log(req.body);

    if (!req.body.nombre && !req.body.edad && !req.body.email && !req.body.password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    const nuevoUser = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const nuevoUsuario = await User.create(nuevoUser);
        res.status(201).json(nuevoUsuario);
    } catch (error) {

        res.status(500).json({ error: 'Error al crear el usuario' });
    }

};
