const mongoose=require('mongoose');
require('dotenv').config();

const mongoURL=process.env.DB_URL;

mongoose.connect(mongoURL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
   
})
const db= mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');
})
db.on('error',(err)=>{
    console.error('mongodb connection error',err);
})
db.on('disconnected',()=>{
    console.log('mongodb server dis Connected');
})

//export the database connection
module.exports=db;





