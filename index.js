const express = require('express')
const mongoose = require("mongoose")
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

// const corssetup={
//     origin:"*",
//     methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowheaders :'Content-Type' 
// }

// app.use(cors(corsOptions));
app.use(bodyparser.json());
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowHeaders: 'Content-Type, Authorization',
};
 
 
 

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true})

const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection Established!'));


const router = require('./routes/product');
app.use('/product/',router);
 
app.listen(process.env.PORT || 3000, ()=> console.log(`Server is running on port ${process.env.PORT || 3000}`))