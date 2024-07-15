const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    },
    productdescription:{
        type:String,
        required:true
    },
    productcategory:{
        type:String,
        required:true
    }
    },{
        timestamps:true
    }
);

module.exports = mongoose.model('ZetaProducts',Schema);