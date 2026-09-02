const express = require('express');

const db = require("./Db");
//const books = require('./Db');

const app = express()

app.use(express.json());

app.get("/api/users",(req,res)=>{
    res.json({
        message:"Happy Birthday SV"
    });
});

app.post("/api/users",(req,res)=>{
    const {name,email} = req.body;

    res.status(201).json({
        message: "User created",
        user: {name,email}
    });
});

//Book Api 

//Get all records
app.get("/api/books",(req,res)=>{
    res.json(db);
});

//get specific record
app.get("/api/books/:id",(req,res)=>{
    const bookId = Number(req.params.id);
    const book = db.find((items)=>items.id === bookId);

    if(!book){
        return res.status(404).json({message: "Book Not Found"})
    }
    res.json(book);
});

//creat ne record with id created with logic
app.post("/api/books",(req,res)=>{
    const {title,author} = req.body;

    if(!title || !author){

        return res.status(400).json({
            message:"Title and author are required"
        });
    }
    const newID = db.length +1;

    const newBook = {
        id:newID,
        title,
        author
    };
    db.push(newBook);
    //db.concat(newBook);
   // module.exports =books

    res.status(201).json({
        message:"Book Created",
        book: newBook
    });
});

//patch
app.patch("/api/books/:id",(req,res)=>{
    const book = db.find((book)=>book.id ===Number(req.params.id));

    if(!book){
        return res.status(404).json({
            message: "Book not founded"
        })
    }

    const {title,author} = req.body;

    if(title) book.title = title;
    if(author) book.author = author;

    res.status(200).json({
        message: "Book Updated",
        book
    });
});

//Delete 
app.delete("/api/books/:id",(req,res)=>{
    const id = Number(req.params.id);

    const BookIndex = db.findIndex((book) => book.id === id);

    if(BookIndex === -1){
        return res.status(401).json({message: "Book not Found"});
    }

    const deletedBook = db.splice(BookIndex,1)[0];

    res.json({
        message: "book deleted",
        book: deletedBook
    })

});

app.listen(3000,()=>{
    console.log("Server running on posrt 3000");
    //console.log(db);
    //console.log(Array.isArray(db));
})