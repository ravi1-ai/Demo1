import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Ct from '../Ct'

const Home = () => {
  let [data,setData]=useState([])
  let [inp,setInp]=useState({"id":""})
  let [emp,setEmp]=useState([])
  let obj=useContext(Ct)
  useEffect(()=>{
    axios.get("http://localhost:5000/emp/getall").then((res)=>{
      setData(res.data)
    })
  },[])

  let del=(id)=>{
    axios.delete(`http://localhost:5000/emp/del/${id}`).then((res)=>{
      axios.get("http://localhost:5000/emp/getall").then((res)=>{
        setData(res.data)
      })
    })
  }
  // let src=(inp)=>{
  //   axios.post("http://localhost:5000/emp/findbyid/",inp).then((res)=>{
  //     setEmp(res.data)
  //   })
  // }
  let search=(e)=>{
    // setInp((inc)=>{
    //   return {[e.target.name]:e.target.value}
    // })
    // inp.id=inp.id+e.target.value
    // console.log(e.target.value)
    
    // setTimeout(src(inp),1000)
    axios.post("http://localhost:5000/emp/findbyid/",{"id":e.target.value}).then((res)=>{
      setEmp(res.data)
    })

  }
  return (
    <div className='homemain'>
      <input type='text' placeholder='search' onChange={search} name='id'/>
      {
        emp.map((item)=>{
          return(<div className='main_card'><div className='Card'>
            <div className='img'>
              <img src={`http://localhost:5000/img/${item.img}`}/>
            </div>
            <div>
            <div>Name : {item.name}</div>
            <div>EmpId : {item.id}</div>
            <div>Email : {item.email}</div>
            <div>Dept : {item.dept}</div>
            </div>
            
          </div>
          <button onClick={()=>del(item.id)}>Delete</button>
          
          </div>)
        })
      }
      {/* <button>search</button> */}
    <div className='homeall'>
      
      {data.length==0&&<h2>No Employee Registered Yet..</h2>}
      {
        data.map((item)=>{
          return(<div className='main_card'><div className='Card'>
            <div className='img'>
              <img src={`http://localhost:5000/img/${item.img}`}/>
            </div>
            <div>
            <div>Name : {item.name}</div>
            <div>EmpId : {item.id}</div>
            <div>Email : {item.email}</div>
            <div>Dept : {item.dept}</div>
            </div>
            
          </div>
          <button onClick={()=>del(item.id)}>Delete</button>
          
          </div>)
        })
      }
    </div>
    </div>
  )
}

export default Home