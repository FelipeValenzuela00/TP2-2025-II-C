import { users } from '../data/users.js';

const getAlumnos = (req, res) => {
    if (req.query.id) {

        let id = Number(req.query.id)

        const user = users.find((user) => {
            console.log("user: ", user.id);
            console.log("id params: ", id);
            console.log("===", user.id === id);
            console.log("==", user.id == id);

            return user.id === id
        })

        if (user) {
            res.json(user)
        } else {

            res.status(404).json({
                id: 0,
                error: 'User no existe'
            })
        }
    } else {
        res.status(400).json({
            error: "Falta ID"
        })
    }

};

