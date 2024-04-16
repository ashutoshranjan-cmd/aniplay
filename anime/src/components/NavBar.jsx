import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const clearData = ()=>{
    localStorage.clear()
    window.location.reload();
  }
  return (
    <div className="nav">
        <nav>
            <ul>
                <li><img  className="logo" src={logo} alt="" /></li>
                <li><input className='search-box' type="text"  placeholder='search here'/></li>
                <li><button className='search-btn'><BsSearch/></button></li>
                <li className='emailId'>{user.email}</li>
               <li><NavLink to={"/"}><button className='login' onClick={clearData}>Log out</button></NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
