import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export default conectarDB;