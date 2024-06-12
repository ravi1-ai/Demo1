import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

  let [data,setData]=useState({"id":"","name":"","email":"","dept":""})
  let navigate=useNavigate()

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    // console.log(data)
  }
  let fun1=(e)=>{
    setData({...data,"img":e.target.files[0]})
    // console.log(data)
  }

  let add=()=>{
    let fd=new FormData()
    for(let prop in data){
      fd.append(prop,data[prop])
      // console.log(prop,data[prop])
    }
    console.log(data)
    axios.post("http://localhost:5000/emp/addemp",fd).then((res)=>{
      navigate("/")
    })
  }


  return (
    <div className='adduser'>
      <div className='form'>
      <form>
  <label for="id">EID:</label><br/>
  <input type="text" id="id" name="id" onChange={fun}/><br/>
  <label for="name">NAME:</label><br/>
  <input type="text" id="name" name="name" onChange={fun}/><br/>
  <label for="email">EMAIL:</label><br/>
  <input type="text" id="email" name="email" onChange={fun}/><br/>
  <label for="dept">DEPT:</label><br/>
  <input type="text" id="dept" name="dept" onChange={fun}/><br/>
  <label for="img">Profile:</label><br/>
  <input type="file" id="img" name="img" onChange={fun1}/><br/>

</form>
<button onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default AddUser