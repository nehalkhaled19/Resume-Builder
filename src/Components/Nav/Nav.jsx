import React from 'react'
import logo from '../../images/small-logo-PhotoRoom-removebg-preview (2).png'
import { Link } from 'react-router-dom'
// bg-body-tertiary
export default function Nav() {
  return <>
  <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#c3daeb'}}>
  <div className="container-fluid">
    <Link className='navbar-brand' to={'../'}>
        <img src={logo} className='w-25' alt="logo" />
    </Link>
 
   
  </div>
</nav>
  </>
}
