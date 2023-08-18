const mongoose=require('mongoose')
const userschema=new mongoose.Schema(    
    {
      firstname:{
        type:String,
        required: true
      },
      lastname:{
        type:String,
        required: true
      },
      customerid:{
        type:String,
        required: true
      },
      email:{
        type:String,
        required: true,
        unique: true
      },
      password:{
        type:String,
        required: true
      },
      phone:{
        type:String
      },
      address:{
        type:String
      },
    })
const collect=mongoose.model('user',userschema)
const saveuser=async(data)=>
{
    const save=new collect(data)
    const savedetails= await save.save()
    return savedetails
}    
const getdetails= async(data)=>
{
    const getdata=await collect.find({$or:[{firstname:data.firstname},{email:data.email},{phone:data.phone}]})
    return getdata
}
const update = async(data1,data2)=>
{
    const upt= await collect.updateOne({firstname:data1},{password:data2})
    return upt;
}
const updatealldetails= async(set2)=>
{
    const updatetoemail= await collect.updateMany({email:set2.email},
    { $set:
      {
        firstname:set2.firstname,
        lastname:set2.lastname,
        customerid:set2.customerid,
        password:set2.password,
        phone:set2.phone,
        address:set2.address
      }
  })
    return updatetoemail
}
const updatedetails= async(set)=>
{
    const updateemail= await collect.findOneAndUpdate({email:set.email},
    { $set:
      {
        firstname:set.firstname,
        lastname:set.lastname,
        customerid:set.customerid,
        password:set.password,
        phone:set.phone,
        address:set.address
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
    saveuser,
    getdetails,
    update,
    updatealldetails,
    updatedetails,
    login
}
