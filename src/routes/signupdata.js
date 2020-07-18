const express = require('express');

const signupdataRouter = express.Router();

signupdataRouter.get('/',function(req,res){
    res.render('signupdata');
});

module.exports = signupdataRouter ;

