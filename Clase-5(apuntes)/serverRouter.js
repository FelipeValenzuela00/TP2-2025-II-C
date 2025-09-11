const http = require("http");

console.log("http:", http)
const port = 3000;


const alumnos = [
    { id: 1, nombre: "Juan Perez", edad: 20 },
    { id: 2, nombre: "Maria Gomez", edad: 22 },
]

http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(201,);
        res.write("hola");



    } else if (req.url === "/alumnos") {
        res.writeHead(200,);
        res.write(JSON.stringify(alumnos));
    } else {
        res.writeHead(404);
        res.write("No encontrado");
    }
    res.end();
}).listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});   