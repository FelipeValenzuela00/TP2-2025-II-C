const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

function separarUsuariosPorGenero() {




    const ruta = path.join(__dirname, 'data', 'usuarios.json')
    const data = fs.readFileSync(ruta, 'utf8')

    let usuarios = JSON.parse(data);

    const rutaHombres = path.join(__dirname, `data`, `hombres.txt`);
    const rutaMujeres = path.join(__dirname, `data`, `mujeres.txt`);
    if (fs.existsSync(rutaHombres) && fs.existsSync(rutaMujeres)) {

        // console.log("Los archivos ya existen");
    } else {
        {


            fs.writeFileSync(rutaHombres, "hombres.txt");
            fs.writeFileSync(rutaMujeres, "mujeres.txt");
        }
    }
    const division = () => {



        let usuariosMasculinos = []; let usuariosFemeninos = [];
        for (let i = 0; i < usuarios.lista.length; i++) {
            console.log(usuarios.lista[i].Sexo);
            if (usuarios.lista[i].Sexo === 'M') {
                console.log("es hombre");
                fs.appendFileSync(rutaHombres, "\n" + JSON.stringify(usuarios.lista[i], null, 2));
            } else if (usuarios.lista[i].Sexo === 'F') {
                console.log("es mujer");
                fs.appendFileSync(rutaMujeres, "\n" + JSON.stringify(usuarios.lista[i], null, 2));
            }


        }
    }
    division();
    console.log(usuarios);



}
separarUsuariosPorGenero();