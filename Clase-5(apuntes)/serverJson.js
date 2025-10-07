const http = require("http");

console.log("http server", http);

const PORT = 3000;

const alumnos = [
    {
        nombre: "Juan",
        edad: 20,
    },
    {
        nombre: "Maria",
        edad: 22,
    }
];

http.createServer((req, res) => {

    try {
        res.writeHead(200);
        res.write(JSON.stringify(alumnos));
        res.end();
    } catch (error) {
        res.writeHead(500);
        res.write("Error: ", error);
        res.end();
    }
}).listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
});