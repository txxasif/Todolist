const express = require('express');
const app = express();
const port = 5000;
var to = [];

//MYSQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'todolist',
    user: 'root',
    password: ''
    });
    connection.connect(function (err) {
        if(err){
            console.log("error occured while connecting");
        }
        else{
            console.log("connection created with Mysql successfully");
        }
     });
     const select = () => { connection.query("SELECT * FROM todo", function (err, result) {
        if (err) throw err;
        let s = result;
        to = s;
        console.log(to)
      });
    }
    app.listen(port,()=> {
        console.log("Server is live",port )
    })
/////////////////////////////
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));


app.get('/',async(req,res)=>{
    await select();
    const todos = to;
   // res.redirect('/')
    res.render("index",{todos})
})
app.post('/',async (req,res)=>{
    const text = req.body.text.trim();
    var sql = "INSERT INTO todo (text) VALUES('"+text+"')";
    if(text === ""){
        res.redirect('/');
        }
    else{
       await connection.query(sql,(err,result)=>{
            if(err ) {
                throw err;
            }
            select();
            res.redirect('/');
            console.log(text+" is inserted into todolist");
    
        })
    }
    
    
})
app.get('/about',(req,res)=>{
    res.render("about")
})
