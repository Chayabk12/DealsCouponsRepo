const mongoose= require('mongoose')

const ProductsList= mongoose.Schema({
    productName:{
         type: String,
         required: true
    },

    productPrice:{
        type: Number,
        required: true
    },

    Quantity:{
        type: Number,
        required : true
    },
    
    Description:{
        type : String,
        required: true
    },

    productImage:{
        type: String,
        required : true
    }
    

});

const Product= module.exports= mongoose.model('Product', ProductsList)