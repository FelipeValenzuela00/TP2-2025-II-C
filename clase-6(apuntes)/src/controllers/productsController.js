import { products } from "../data/products.js";

export const getProducts = (req, res) => {
    if (req.query.id) {

        let id = Number(req.query.id)

        const product = products.find((product) => {
            console.log("product: ", product.id);
            console.log("id params: ", id);
            console.log("===", product.id === id);
            console.log("==", product.id == id);
            return product.id === id
        })



        if (product) {
            res.json(product)
        } else {
            res.status(404).json({
                id: 0,
                error: 'Product no existe'
            })
        }
    } else {
        res.status(400).json({
            error: "Falta ID"
        })
    }

};