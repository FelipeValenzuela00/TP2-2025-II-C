const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

function separarUsuarios() {

    const ruta = path.join(__dirname, 'data', 'usuarios.json');
    const ruta2 = path.join(__dirname, 'data', 'usuarios2.json');

    const existe = fs.existsSync(ruta);

    // console.log(existe);

    const data = fs.readFileSync(ruta, 'utf-8');


    //json.parse convierte un string a un objeto


    console.log(JSON.parse(data));

    let usuarios2 = {
        total: 5,
        lista: [
            {
                nombre: 'Juan Perez',
                Sexo: 'M',
                email: 'juan.perez@example.com'
            },
            {
                nombre: 'Maria Gomez',
                Sexo: 'F',
                email: 'maria.gomez@example.com'
            },
            {
                nombre: 'Pedro Martinez',
                Sexo: 'M',
                email: 'pedro.martinez@example.com'
            },
            {
                nombre: 'Ana Torres',
                Sexo: 'F',
                email: 'ana.torres@example.com'
            },
            {
                nombre: 'Luis Fernandez',
                Sexo: 'M',
                email: 'luis.fernandez@example.com'
            }
        ]
    }

    fs.writeFileSync(ruta2, JSON.stringify(usuarios2, null, 2));

}

separarUsuarios();