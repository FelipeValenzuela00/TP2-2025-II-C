
import bycrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';


export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            error: "Faltan Datos"
        })
    }

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        console.log("user: ", user);

        //$2b$10$C2jB1SXwc0zYpeZ4mkx3ee3mA6c1W1PJpNLb4jr4cIjHaBpypw5cm



        const match = await bycrypt.compare(password, user.password)


        if (!match) {
            return res.status(401).json({ error: "Credenciales invalidas" });
        }

        const datosEncriptados = {
            id: user._id,
            email: user.email
        }
        const JWT_SECRET = process.env.JWT_SECRET;

        console.log("JWT_SECRET: ", JWT_SECRET);

        res.json(user)
    } catch (error) {

        res.status(500).json({ error: "Error al iniciar sesion", errorMsg: error })
    }
}