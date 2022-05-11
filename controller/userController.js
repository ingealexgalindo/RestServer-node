const { response, request } = require('express');


const userGet = (req, res = response) => {

    //get con query parameters desustructurando los valores que recibe
    const { q, nombre = '', apikey, page = 1, limit } = req.query;

    res.status(201).json({
        "msg": "get API - desde Controller",
        q, nombre, apikey, page, limit
    });  // para retornar con formato JSON
}

const userPost = (req, res = response) => {

    //extraer los datos que vienen en el post del body 
    const { nombre, edad } = req.body;

    res.json({
        "msg": "Post API - desde Controller",
        nombre,
        edad
    });  // para retornar con formato JSON
}

const userPut = (req, res = response) => {

    //para recibir un valor dentro de la url
    const id = req.params.id;

    res.json({
        "msg": "Put API - desde Controller",
        id
    });  // para retornar con formato JSON
}

const userPatch = (req, res = response) => {
    res.json({
        "msg": "Patch API - desde Controller"
    });  // para retornar con formato JSON
}

const userDelete = (req, res = response) => {
    res.json({
        "msg": "Delete API - desde Controller"
    });  // para retornar con formato JSON
}

module.exports = {
    userGet,
    userPost,
    userPatch,
    userPut,
    userDelete
}