import express from 'express';
import nodemon from 'nodemon';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Home de la API</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});