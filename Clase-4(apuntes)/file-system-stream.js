const path = require(`path`);

const fs = require(`fs`);


const archivoGrande = path.join(__dirname, 'data', 'archivo-grande.txt');

if (!fs.existsSync(archivoGrande)) {
    const writeStream = fs.createWriteStream(archivoGrande, 'utf8')
    for (let i = 0; i < 10000; i++) {
        console.log("escribiendo linea: ", i);

        writeStream.write(`Linea de codigo numero ${i}\n`);
    }
    writeStream.end();
}












const stream = fs.createReadStream(archivoGrande, 'utf-8');
stream.on('data', (chunk) => {
    console.log("chunk: ", chunk);
});

stream.on('end', () => {
    console.log("termino de leer el archivo");
});

stream.on("error", (err) => {
    console.log("Sucedio un error: ", err.message);

});
