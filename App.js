const express = require('express');
const app = new express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'#',name:'Authors'
    },
    {
        link:'/signin',name:'Signin'
    },
    {
        link:'/signup',name:'Signup'
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





app.listen(5000);
