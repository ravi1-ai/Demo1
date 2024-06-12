import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src='https://th.bing.com/th/id/OIP.0s1XmLE9vWPgvKkAM5KNGAHaD5?pid=ImgDet&w=201&h=105&c=7&dpr=1.5'/>
      </div>
        <Link to="/">Home</Link>
        {/* <Link to="/search">Search</Link> */}
        <Link to="/add">AddUser</Link>
        <div className='menu'>Menu
          <div className='menu1'>
          <Link to="/add">AddUser</Link>
          <Link to="/">Home</Link>
          </div>
        </div>
    </div>
  )
}

export default Nav