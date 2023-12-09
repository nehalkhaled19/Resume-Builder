import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import $ from 'jquery'
import Tagify from '@yaireo/tagify'

export default function Skills() {
useEffect(()=>{
  var inputs = document.querySelectorAll('.tags-input');
  inputs.forEach(function(input) {
    // Check if Tagify is not already applied to the element
    if (!input.classList.contains('tagify')) {
      new Tagify(input,{maxTags: 15});
    }
  });

  $('.tagify').addClass('form-control');


},[])
    return <section className='py-5  container d-flex align-items-center home '>
      <header className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Skills </h2>
        <div className=' mx-md-5 mx-3 mt-3 mb-3'>

          {/* form */}
          <form className='row  pb-4 border-bottom ' >

            {/* row one */}
            <div className=" col-md-12 my-3">
                <input name="tags" placeholder=" Enter your Technical Skills" className='form-control tags-input' defaultValue=""/>
            </div>
            <div className=" col-md-12 my-3">
            <input name="tags" placeholder="  Enter your Interpersonal Skills" className='form-control tags-input' defaultValue=""/>
            </div>
            <div className="col-md-12 my-3">
            <input name="tags" placeholder="Languages" className='form-control tags-input' defaultValue=""/>
            </div>
          </form>


          {/* buttons */}
          <div className='w-100 text-center mt-2'>
            <Link to='../education'>
              <button className=' btn btn-main-disable px-3 m-2'>
                <i className="fa-solid fa-angle-left me-2"></i>
                Back
              </button>
            </Link>
            <Link style={{opacity:'0'}}>
                  <button className=' btn btn-main  px-3'>
                    Next
                    <i className="fa-solid fa-angle-right ms-2"></i></button>
                </Link>
    
          </div>
          <div className='text-end my-2' >
          <Link >
                  <button className='btn btn-add px-3'>
                    DOWNLOAD RESUME  
                    <i className=" mx-2 fa-solid fa-download" c></i></button>
                </Link>
                </div>
        </div>

      </header>
    </section >
  }
