const mongoose= require('mongoose')

const CouponList= mongoose.Schema({
    CouponName:{
         type: String,
         required: true
    },

    CouponCode:{
        type: String,
        required: true
    },


    Description:{
        type: String,
        required: true
    },

    CouponImage:{
        type: String,
        required: true
    },
  
    

});

const Coupon= module.exports= mongoose.model('Coupon', CouponList)