const controllers = {};
const axios = require('axios');
const global = "https://reqres.in/api";


controllers.signin = (req, res) => {
    const { email, password } = req.body;
    if(email === "" || password === ""){
        res.json({ status : 440, message : 'Datos requeridos' });
    }else{
        let url = global + '/login';
        axios.post(url, {email, password})
        .then(data => {
            res.json({ status : 200, message: 'Login correcto', token: data.data.token });
        })
        .catch(error => {
            console.log(error);
            res.json({ status: 440, message : 'Correo no encontrado' });
        })
    }
}


controllers.users = (req, res) => {
    let url = global + '/users';
    axios.get( url )
    .then(data => {
        res.json({ status : 200, data : data.data });
    })
    .catch(error => {
        res.json({ status : 440, data : null, message : error });
    });
}


controllers.register = (req, res) => {
    const { email, password } = req.body;
    if(email === "" || password === ""){
        res.json({ status : 440, message : 'Datos requeridos' });
    }else{
        let url = global + '/registrar';
        axios.post(url, {email, password})
        .then(data => {
            res.json({ status : 200, message: 'Registro correcto', id:data.data.id,token: data.data.token });
        })
        .catch(error => {
            console.log(error);
            res.json({ status: 440, message : 'Registro incorrecto' });
        })
    }
}

controllers.users = (req, res) => {
    const { name, job } = req.body;
    if(name === "" || job === ""){
        res.json({ status : 440, message : 'Datos requeridos' });
    }else{
        let url = global + '/usuario';
        axios.post(url, {name, job})
        .then(data => {
            res.json({ status : 200, message: 'Registro usuario correctamente', name:data.data.name, job:data.data.job, id:data.data.id, createdAt: data.data.createdAt });
        })
        .catch(error => {
            console.log(error);
            res.json({ status: 440, message : 'Registro de usuario incorrecto' });
        })
    }
}


module.exports = controllers;