import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("")

  return (
    <div className='navbar'>
        <div className='title'>
      <img src="https://play-lh.googleusercontent.com/joxfj1gkug2ZWkWZT-t6VkhBgm3cafwyb748rQo3yQi9gCxzxjzcCrsQ66Cpdg8DNJqa" alt="" className="logo" />
      <h1>Apna <span>Thali</span></h1>
      </div>
      <div className="navbar-center">
        <button className='custom-button'>JAHA JAO WAHA KHAO</button>
      </div>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Plans")} className={menu==="Plans"?"active":""}>Plans</li>
        <li onClick={()=>setMenu("Restaurants")} className={menu==="Restaurants"?"active":""}>Restaurants</li>
        <li onClick={()=>setMenu("Shope")} className={menu==="Shope"?"active":""}>Shope</li>
      </ul>
     
    </div>
  )
}

export default Navbar
