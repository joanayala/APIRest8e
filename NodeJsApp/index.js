//1. Call mysql package
const mysql = require('mysql');
//2. Call express package
const express = require('express');
//3. Call body-parser package
const bodyparser = require('body-parser');
//4. Instance a new express application
var app = express();
//5. Enable json request
app.use(bodyparser.json());
//6. Create mysql data base connection
var connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market'
});
//7. Validate mysql connection
connectionDB.connect((err) => {
    if(!err)
        console.log('::: Succesfull connection to Data Base :::');
    else
        console.log('DB connection failed \n Error: ' + JSON.stringify(err,undefined,2));    
});

//8. RUN Server
app.listen(3000,()=>console.log('Server is running at port 3000'));

//9. Get all users
app.get('/list_users',(req,res) => {
    connectionDB.query('SELECT * FROM users',(err,rows,fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
}); 

//10. Get an user
app.get('/list_users/:id',(req,res) => {
    connectionDB.query('SELECT * FROM users WHERE id = ?',[req.params.id],(err,rows,fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

//11. Delete an user
app.delete('/list_users/:id',(req,res) => {
    connectionDB.query('DELETE FROM users WHERE id = ?',[req.params.id],(err,rows,fields) => {
        if(!err){
            console.log('::: The user has been deleted :::');
        }else{
            console.log(err);
        }
    });
});