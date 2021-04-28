//importamos la clase 
const {Router} = require('express');

//leer controllers/index.js
const controllers = require('../controllers');

//crear objeto router a partir de clase Router
const router = Router();

//definir rutas
router.get('/', (req, res) => res.send('Welcome'))

//insertar nuevo usuario
router.post('/usuario', controllers.createUsuario);
//leer todos los usuarios
router.get('/usuario', controllers.getAllUsuarios);

//insertar nuevo usuario
router.post('/ofertaUsuario', controllers.createOferta_Usuario);
//leer todos los usuarios
router.get('/ofertaUsuario', controllers.getOferta_Usuario);

//insertar nuevo usuario
router.post('/oferta', controllers.createOferta);
//leer todos los usuarios
router.get('/oferta', controllers.getOferta);

module.exports = router;