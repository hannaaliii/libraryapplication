const express = require('express');

const signindataRouter = express.Router();

signindataRouter.get('/',function(req,res){
    res.render('signindata');
});

module.exports = signindataRouter ;


