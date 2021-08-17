const axios = require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    }) 
}

exports.add_contact=(req,res)=>{
    res.render('add_contact')
}

exports.update_contact=(req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_contact", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}