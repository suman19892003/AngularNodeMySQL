const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

const users=require('./routes/Users');

app.use('/emp',users);

const port=process.env.port ||5000;
app.listen(port,()=>{
    console.log(`App is running on ${port}`);
})