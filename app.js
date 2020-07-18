const express = require('express');
const app = new express();
const nav = [
    {
        link:'/books',name:'BOOKS'
    },
    {
        link:'#',name:'AUTHORS'
    },
    {
        link:'/signin',name:'SIGNIN'
    },
    {
        link:'/signup',name:'SIGNUP'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav)
const signinRouter = require('./src/routes/signin')
const signupRouter = require('./src/routes/signup')
const signindataRouter = require('./src/routes/signindata')
const signupdataRouter = require('./src/routes/signupdata')



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/signindata',signindataRouter);
app.use('/signupdata',signupdataRouter);



app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
    });
});





app.listen(7800);
