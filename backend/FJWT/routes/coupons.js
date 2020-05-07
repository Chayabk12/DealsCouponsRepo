var express = require('express');
const Coupon = require('../models/coupons')
var router = express.Router();

router.get('/getCoupons', (req, res, next)=>{

    Coupon.find(function(err,  Coupons) {
        if (err){
            res.json(err)
        }
        else{
            res.json(Coupons)
        }
    })
    }) 
  
      router.post('/coupon', (req, res, next)=>{
    let newCoupon= new Coupon({
        CouponName: req.body.CouponName,
        CouponCode: req.body.CouponCode,
        Description : req.body.Description,
        CouponImage: req.body.CouponImage,
    
        
    });
    
    newCoupon.save((err, coupons)=>{
        if (err){
            res.json(err)
        }
    
        else{
            res.json({msg: 'Coupon added'})
        }
    });
    }); 

    module.exports=router;