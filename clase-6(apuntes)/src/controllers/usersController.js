import { users } from '../data/users.js';
import User from '../models/User.js';


export const getUsers = (req, res) => {

    if (req.query.id) {

        let id = Number(req.query.id)

        const user = users.find((user) => {
            console.log("user: ", user.id);
            console.log("id params: ", id);
            console.log("===", user.id === id);
            console.log("==", user.id == id);

            return user.id === id
        })

        if (user) {
            res.json(user)
        } else {

            res.status(404).json({
                id: 0,
                error: 'User no existe'
            })
        }
    } else {
        res.status(400).json({
            error: "Falta ID"
        })
    }

};

export const createUser = async (req, res) => {


    console.log("req.body: ", req.body);


    if (!req.body.nombre && !req.body.edad && !req.body.email && !req.body.password) {
        res.status(400).json({
            error: "Faltan Datos"
        })
    }

    const nuevoUsuario = {

        nombre: req.body.nombre,
        edad: req.body.edad,
        email: req.body.email,
        password: req.body.password
    };
    try {
        const newUser = await User.create(nuevoUsuario);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear el usuario", errormsg: error })
    }


};



