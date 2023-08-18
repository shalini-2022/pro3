const db=require('./services')
const registration=async(req,res)=>
{
    const registerdetails=await db.saveproducts(req.body)
    res.send("product add successfully")
}
const get=async(req,res)=>
{
    const display=await db.details(req.body)
    res.send(display)
}
const data=async(req,res)=>
{
    const fetchdetails=await db.updateprice(req.body)
    res.send(fetchdetails)
}
const updatedata = async(req,res)=>
{
    const details= await db.update(req.body.Customername,req.body.Password)
    res.send (details)
}
const updateall=async(req,res)=>
{
    const update= await db.updateprice(req.body)
    res.send(update)
}
const updatedetails= async(req,res)=>
{
    const update= await db.updatealldetails(req.body)
    res.send(update)
}
const loginform=async(req,res)=>
{
    const loginuser2= await db.login(req.body)
    if (loginuser2.length==0)
    {
        res.send("Email id not found")
    }
    else if(req.body.Password==loginuser2[0].Password)
    {
        res.send("log in success")
    }
    else
    {
        res.send("Password incorrect")
    }    
}
module.exports=
{
    registration,
    get,
    data,
    updatedata,
    updateall,
    updatedetails,
    loginform
}