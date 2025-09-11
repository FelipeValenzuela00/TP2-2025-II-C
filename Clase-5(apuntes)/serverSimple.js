const http = require("http");

console.log("http:", http)
const port = 3000;

http.createServer((req, res) => {
    res.write("Hola mundo");
    res.end();
}).listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});   