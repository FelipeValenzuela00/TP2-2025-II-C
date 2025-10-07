const http = require("http");

console.log("http server", http);

const PORT = 3000;
http.createServer((req, res) => {
    res.write("Hola mundo desde mi servidor con Node.js");
    res.end();

}).listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:", PORT);
});
