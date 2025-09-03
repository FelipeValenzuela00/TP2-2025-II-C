const path = require(`path`);

const fs = require(`fs`);
const ruta = path.join(__dirname, `data`, `notas.txt`);

// console.log(ruta);

// console.log("dirname:", __dirname);



//fs.existsync// se verifica que el archivo exista
//fs.writefilessync// escribe un archivo


if (fs.existsSync(ruta)) {
    console.log("El archivo existe");

}
else {
    console.log("El archivo no existe");
    fs.writeFileSync(ruta, "hola")
}


const contenido = fs.readFileSync(ruta, `utf-8`);

console.log("contenido : ", contenido);

// Lectura asincrona
fs.readFile(ruta, (err, data) => {
    if (err) throw err;

    console.log("lectura asincrona: ", data.toString());
});

let mensaje = "adios";


fs.appendFileSync(ruta, "\n" + mensaje);

console.log("contenido : ", contenido);

const archivoRenombre = path.join(__dirname, `data`, `notas-renombrado.txt`);
if (fs.existsSync(archivoRenombre)) {
    fs.renameSync(ruta, archivoRenombre);
} else {
    console.log("El archivo ya se llama asi");
}

fs.renameSync(ruta, archivoRenombre);
