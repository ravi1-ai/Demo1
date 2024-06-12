const multer = require("multer")
const { Knex } = require("../knexfile")
const knex = require("knex")
let fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './pimg')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })

  const add=async(req,res)=>{
    try{
        let combine=""+req.body.id+req.body.name+req.body.email+req.body.dept
        // console.log(combine)
        await Knex("employee").insert({id:req.body.id,name:req.body.name,email:req.body.email,img:req.file.filename,dept:req.body.dept,allcol:combine})
        res.json({"msg":"employee added"})
    }
    catch(error){
        console.log(error)
    }
  }

  const getall=async(req,res)=>{
    try{
        const data = await Knex.select("*").from("employee")
        res.json(data)
    }
    catch(error){
        console.log(error)
    }
  }

  const getbyid=async(req,res)=>{
    try{
      // console.log(req.body.id)
      if (req.body.id != ""){
      let data=req.body.id
      let result=[]
      let user=await Knex.select("*").from("employee")
      for(let i=0;i<user.length;i++){
        if(user[i].allcol.includes(data)){
          result.push(user[i])
        }
      }
      // console.log(result)
      res.json(result)
    }
    else{
      res.json([])
    }
  }
  
    catch(error){
      console.log(error)
    }
  
    
  }

  
const del=async(req,res)=>{
  try{
    let user=await Knex.select("img").from("employee").where({id:req.params.eid})
    // console.log(user[0].img)
    fs.rm(`./pimg/${user[0].img}`,()=>{
      console.log("ok")
    })
      await Knex("employee").where({ id:req.params.eid }).del()
      
      res.send("ok")
  }
  catch(error){
      console.log(error)
  }
}

  module.exports={add,upload,getall,getbyid,del}