var express = require('express')
var app = express();
var mongoose = require('mongoose');
var router = require('./routes/users')
var bodyparser= require('body-parser');
var cors= require('cors');
var userrouter = require ('./routes/users');
var couponrouter = require('./routes/coupons')

app.use(bodyparser.json())
mongoose.connect('/mongodb://localhost:27017/ricker', {useNewUrlParser: true })

mongoose.connection.on('connected', ()=>{
    console.log('connected')
})
app.use('/rest', userrouter );
app.use('/coupon', couponrouter);

//app.use(cors())

/* app.use(cors({
    origin:'http://localhost:4200'
  })); */
const port= 1233;
app.listen(port,()=>{
console.log('connection on', port)
})
