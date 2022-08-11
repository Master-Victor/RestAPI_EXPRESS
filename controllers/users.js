const { response, request } = require('express');


const userGet = (req = request, res = response ) => {

    const params = req.query;

    res.status(403).json({
        msg: 'get API - controller',
        params
    })
} 

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.status(403).json({
        msg: 'put API  - controller',
        id
    })
} 

const userPost =  (req, res = response ) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controller',
        nombre,
        edad,
    })
} 

const userDelete = (req, res) => {
    res.status(403).json({
        msg: 'delete API - controller'
    })
} 
const userPatch = (req, res) => {
    res.status(403).json({
        msg: 'patch API - controller'
    })
}

module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}