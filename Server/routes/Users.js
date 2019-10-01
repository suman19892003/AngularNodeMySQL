const express=require('express');
const app=express.Router();
const cors=require('cors');

const mySql=require('mysql');
app.use(cors());

var connection=mySql.createConnection({
  host:'localhost',
  user:'root',
  password:'Suman@123',
  database:'nodemysql'
});

connection.connect((err)=>{
  if(err){
    throw err;
  }
  else{
    console.log('SQL Connected..')
  }
})

app.get('/',(req,res)=>{
    res.send('Home Employee');
});

/* SQL Operation start */

app.get('/allusers',(req,res)=>{
  var query=`Select * from userlogin`;
  connection.query(query,(err, results)=>{
    if(err){throw err}
    else{
      res.send(results);
    }
  })
})

app.get('/user/:id',(req,res)=>{

  var query=`Select * from userlogin where id=${req.params.id}`;
  connection.query(query,(err,results)=>{
    if(err){
      throw err;
    }
    else{
      res.send(results);
    }
  })
})

app.post('/addUser',(req,res)=>{
  debugger;
  var sql=`INSERT INTO userlogin(firstname,lastname,address,email)
  VALUES('${req.body.firstname}','${req.body.lastname}','${req.body.address}','${req.body.email}')`;

  connection.query(sql, function(err, results, query) {
      if (err) throw err;
      if(!err) {
          //res.send(results);
          res.status(200).send('Success')
      }
  })
})

app.post('/updateUser/:id',(req,res)=>{
  let sql=`UPDATE userlogin SET firstname ='${req.body.firstname}', lastname ='${req.body.lastname}', address ='${req.body.address}', email = '${req.body.email}' WHERE id = ${req.params.id}`;

    connection.query(sql, (err, results)=> {
    if (err) throw err;
    if(!err) {
        console.log(results.message);
    }
    })
    res.end('Success')
})


/* Operation from Orders table */
app.get('/orders',(req,res)=>{
  let query=`Select * from orderdetails`;
  connection.query(query,(err,results)=>{
    if(err){
      throw err;
    }
    else{
      res.send(results);
    }
  })
})

app.get('/order/:id',(req,res)=>{
  let query=`Select * from orderdetails where id=${req.params.id}`;
  connection.query(query,(err,results)=>{
    if(err){
      throw err
    }
    else{
      res.send(results);
    }
  })
})

/* SQL Operation end */

module.exports=app;