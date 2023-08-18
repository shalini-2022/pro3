const db=require('../user/services')
const registration=async(req,res)=>
{
    const registerdetails=await db.saveuser(req.body)
    res.send("register successfully")
}
const getuser=async(req,res)=>
{
    const display=await db.getdetails(req.body)
    res.send(display)
}
const updatedata = async(req,res)=>
{
    const details= await db.update(req.body.firstname,req.body.password)
    res.send (details)
}
const updatealldetails=async(req,res)=>
{
    const update= await db.updatealldetails(req.body)
    res.send(update)
}
const updatedetails= async(req,res)=>
{
    const update= await db.updatedetails(req.body)
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
    getuser,
    updatedata,
    updatealldetails,
    updatedetails,
    loginform
}