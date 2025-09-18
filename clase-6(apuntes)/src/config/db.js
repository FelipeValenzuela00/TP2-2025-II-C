import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conexion a la base de datos exitosa");
    } catch (error) {
        console.error("Error de conexion a la base de datos: ", error.message);

    }
}

export default conectarDB;