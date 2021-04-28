//leer todos los modelos creados (users, ..posts, products)
const models = require("../database/models");

//crear operación POST para un usuario nuevo
const createUsuario = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const usuario = await models.Usuario.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({usuario});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para usuarios
const getAllUsuarios = async (req, res) => {
    console.log('getting usuarios');
	try{
	    const usuarios = await models.Usuario.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({usuarios});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};


//crear operación POST para un usuario nuevo
const createOferta_Usuario = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const oferta_usuarios = await models.Oferta_Usuario.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({oferta_u: oferta_usuarios});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para usuarios
const getOferta_Usuario = async (req, res) => {
    console.log('getting ofertas_usuario');
	try{
	    const oferta_usuarios = await models.Oferta_Usuario.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({oferta_u: oferta_usuarios});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};


//crear operación POST para un usuario nuevo
const createOferta = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const oferta = await models.Oferta.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({oferta: oferta});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para usuarios
const getOferta = async (req, res) => {
    console.log('getting ofertas');
	try{
	    const ofertas = await models.Oferta.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({ofertas: ofertas});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};


module.exports = {
    createUsuario,
	getAllUsuarios,
	createOferta_Usuario, 
	getOferta_Usuario,
	createOferta,
	getOferta

};