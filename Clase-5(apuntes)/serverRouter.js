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
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Home de la API</h1>");
    } else if (req.url === "/api/alumnos") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(alumnos));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("Not found");
    }
    res.end();

}
).listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
});