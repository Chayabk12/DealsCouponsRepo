var express = require('express');
//const Coupon = require ('../models/coupons')
var router = express.Router();
var User = require('../models/user');
const Product = require ('../models/product');
var jwt = require('jsonwebtoken');


router.post('/register', function(req,res,next){
 //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6060');
    var user = new User({
        email : req.body.email,
        username : req.body.username,
        password : User.hashPassword(req.body.password)
    });

    let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

router.post('/login', function(req,res,next){
  let promise = User.findOne({email:req.body.email}).exec();

promise.then(function(doc){
 if(doc) {
   if(doc.isValid(req.body.password)){
       // generate token
       let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});

       return res.status(200).json({token});

   } else {
     return res.status(501).json({message:' Invalid Credentials'});
   }
 }
 else {
   return res.status(501).json({message:'User email is not registered.'})
 }
});

promise.catch(function(err){
  return res.status(501).json({message:'Some internal error'});
})
})


router.get('/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.username);
})


var decodedToken='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}


router.get('/getProducts', (req, res, next)=>{

  Product.find(function(err, products) {
      if (err){
          res.json(err)
      }
      else{
          res.json(products)
      }
  })
  }) 

    router.post('/pro', (req, res, next)=>{
  let newProduct= new Product({
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      Quantity : req.body.Quantity,
      Description : req.body.Description,
      productImage : req.body.productImage
  });
  
  newProduct.save((err, products)=>{
      if (err){
          res.json(err)
      }
  
      else{
          res.json({msg: 'item added'})
      }
  });
  }); 




module.exports= router
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
      return next();
  }
  res.redirect('/');
}
