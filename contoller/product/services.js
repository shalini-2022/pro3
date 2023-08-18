const mongoose=require('mongoose')
const productSchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required: true
      },
      productid:{
        type:String,
        required: true
      },
      category:{
        type:String,
        required: true
      },
      price:{
        type:String,
        required: true
      },
      quantity:{
        type:Number,
        required: true
      },
      brand:{
        type:String
      }
    })
const collect=mongoose.model('product',productSchema,'product')
//save
const saveproducts= async(data)=>
{
    const product=new collect(data)
    const productdetails=await product.save()
    return productdetails
}
//findone
const details= async(data)=>
{
    const getdata=await collect.findOne({$or:[{category:data.category},{name:data.name},{price:data.price}]})
    return getdata
}
//updateone
const updateprice = async(data)=>
{
    const upt= await collect.updateOne({productid:data.productid},{price:data.price})
    return upt;
}
//updateMany
const update= async(set)=>
{
    const updateemail= await collect.updateMany({productid:set.productid},
    { $set:
        {
          name:set.name,
          category:set.category,
          price:set.price,
          quantity:set.quantity,
          brand:set.brand
        }
    })
    return updateemail
}
//findoneandupdate
const updatealldetails= async(set)=>
{
    const updateemail= await collect.findOneAndUpdate({productid:set.productid},
    { $set:
        {
          name:set.name,
          category:set.category,
          price:set.price,
          quantity:set.quantity,
          brand:set.brand
        }
    })
    return updateemail
}
const login= async(data)=>
{
    const userlogin = await collect.aggregate([{$match:{Email:data.Email}}])
    return userlogin
}
module.exports=
{
    saveproducts,
    details,
    updateprice,
    update,
    updatealldetails,
    login
}
