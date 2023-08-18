const express=require('express')
const router=express.Router()
const functions = require('../contoller/user/index')   
const function2=require('../contoller/product/index')
const { details } = require('../contoller/product/services')
let routes = (app)=>
{
    router.post('/register',functions.registration)
    router.post('/getdata',functions.getuser)
    router.post('/view',functions.updatedata)
    router.put('/updatedetails',functions.updatealldetails)
    router.put('/updateall',functions.updatedetails)
    router.post('/login',functions.loginform)
    router.post('/product',function2.registration)
    router.post('/productid',function2.data)
    router.post('/updateproduct',function2.get)
    router.put('/productdetails',function2.updateall)
    router.put('/details',function2.updatedetails)
    app.use('/api',router)
}
module.exports=
routes
