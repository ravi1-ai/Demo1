const express=require("express")
const { upload, add, getall, getbyid, del } = require("../Controller/Emp")
const emproute=new express.Router()
emproute.post("/addemp",upload.single("img"),add)
emproute.get("/getall",getall)
emproute.post("/findbyid/",getbyid)
emproute.delete("/del/:eid",del)

module.exports={emproute}