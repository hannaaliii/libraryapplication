const express = require('express');

const booksRouter = express.Router();

function router(nav){

    var books = [
        {
        title : "The Kite Runner",
        author : "Khaled Hosseini",
        genre : "Novel",
        img : "THE-KITE-RUNNER-F.jpg"
        },
        {
            title : "Two states",
            author : "Chetan Bhagath",
            genre : "Novel",
            img : "2states.jpg"
        },
        {
            title : "The Da Vinci Code",
            author : "Dan Brown",
            genre : "Detective fiction",
            img : "the-da-vinci-code.png"
        }
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render('books',
        {
            nav,
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id ;
        res.render("kiterunner",{
            nav,
            title:'Library',
            book: books[id]
        });
    });
    
    return booksRouter ;
}


module.exports = router ;

