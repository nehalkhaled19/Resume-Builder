import React from 'react'
import logo from '../../images/small-logo-PhotoRoom-removebg-preview (2).png'
import { Link } from 'react-router-dom'
// bg-body-tertiary
export default function Nav() {
  return <>
  <nav class="navbar navbar-expand-lg " style={{ backgroundColor: '#c3daeb'}}>
  <div class="container-fluid">
    <Link className='navbar-brand'>
        <img src={logo} className='w-25' alt="logo" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
  </div>
</nav>
  </>
}
