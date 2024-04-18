const mongoose=require('mongoose');
const mongoURL="mongodb+srv://pk5484257:pk12345@cluster0.ge7wmuw.mongodb.net/?retryWrites=true&w=majority"

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





