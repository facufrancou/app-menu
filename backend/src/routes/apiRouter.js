/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

const apiController = require('../controllers/apiController');

/* Solicitud GET de la lista de tragos */
router.get('/drinks', apiController.getDrinks);

/* Solicitud GET de la lista de comidas */
router.get('/foods', apiController.getFoods);

/* Exportamos la variable router */
module.exports = router;