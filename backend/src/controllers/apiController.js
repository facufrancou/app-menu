const fs = require('fs');

let menuDrinks = JSON.parse(fs.readFileSync('./data/menuDrinks.json', 'utf8')); // almacenamos en la variable menuDrinks el contenido del archivo menuDrinks.json
let menuFoods = JSON.parse(fs.readFileSync('./data/menuFoods.json', 'utf8')); // almacenamos en la variable menuFoods el contenido del archivo menuFoods.json

const apiController = {
    getDrinks: (req, res) => {
        res.send(menuDrinks)
    },
    getFoods: (req, res) => {
        res.send(menuFoods)
    }
}

module.exports = apiController;