const path = require(`path`);

const fs = require(`fs`);


const fsp = fs.promises;

const ruta = path.join(__dirname, 'data', 'bloq.txt');

// try {
//     if (!fs.existsSync(ruta)) {
//         fsp.writeFile(ruta, "Primera Linea", 'utf-8');
//     }
//     const contenido = fs.readFileSync(ruta, 'utf-8');

//     console.log("contenido: ", contenido);
// }
// catch (err) {
//     console.log("tiro error: ", err);
// }



const Promesas = async () => {

    try {

        const contenido = await fsp.readFile(ruta, 'utf-8');

        console.log("contenido con promesas: ", contenido);

        await fsp.appendFile(ruta, '\nSegunda Linea', 'utf-8');

        const nuevoContenido = await fsp.readFile(ruta, 'utf-8');

        console.log("nuevo contenido: ", nuevoContenido);

    } catch (error) {
        console.log("error: ", error);
    }


}

Promesas();