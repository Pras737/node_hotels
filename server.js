const express = require('express')
const app = express();
const db= require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const PORT=process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('welcome to my hotel... how i can help you?')
})

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir, i would love to serve chicken ')
// })

// app.get('/idli',(req,res)=>{
//     var customized_idli={
//         name:'rava idli',
//         size:'20 cm diameter',
//         is_chuteny:'true',
//         is_sambar:'yes',
//     }
//     res.send(customized_idli);
   
// })


// import the router files
const menuRoutes=require('./routes/menuRoutes');
const personRoutes=require('./routes/personRoutes');

// use the routers
app.use('/menu',menuRoutes);
app.use('/person',personRoutes);


app.listen(PORT,()=>{
    console.log('listening on port 3000')
})
