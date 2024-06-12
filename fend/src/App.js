import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Comp/Nav'
import Home from './Comp/Home'
import AddUser from './Comp/AddUser'
import Search from './Comp/Search'
import './App.css'
import Ct from './Ct'

const App = () => {
  let [data,setData]=useState({"id":"","name":"","dept":"","email":""})
  let updData=(obj)=>{
    setData({...data,...obj})
  }
  let obj={"data":data,"updData":updData}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddUser/>}/>
      {/* <Route path='/search' element={<Search/>}/> */}
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App