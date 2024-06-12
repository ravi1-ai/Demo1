import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
  let [data,setData]=useState({"id":""})
  let [emp,setEmp]=useState([])
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let fun1=()=>{
    axios.post("http://localhost:5000/emp/findbyid/",data).then((res)=>{
      setEmp(res.data)
    })
  }
  let del=(id)=>{
    axios.delete(`http://localhost:5000/emp/del/${id}`).then((res)=>{
      axios.get("http://localhost:5000/emp/getall").then((res)=>{
        setData(res.data)
      })
    })
  }
  return (
    <div className='search'>
      <input type='text' placeholder='EmpID' name='id' onChange={fun}/>
      <button onClick={fun1}>search</button>
      {emp.length!=0&&<div className='main_card'><div className='Card'>
        <div className='img'>
              <img src={`http://localhost:5000/img/${emp[0].img}`}/>
            </div>
            <div>
            <div>Name : {emp[0].name}</div>
            <div>EmpId : {emp[0].id}</div>
            <div>Email : {emp[0].email}</div>
            <div>Dept : {emp[0].dept}</div>
            </div>
        </div>
        <button onClick={()=>del(emp[0].id)}>Delete</button>
        </div>}
    </div>
  )
}

export default Search