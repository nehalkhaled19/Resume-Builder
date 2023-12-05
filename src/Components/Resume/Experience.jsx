import React from 'react'
import { Link } from 'react-router-dom'


export default function Experience() {
  return (
    <section className='py-5  container d-flex align-items-center home '>
      <div className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Experience Details</h2>
        <div className=' mx-5 my-4 bg-info'>
          <h4>
            <i class="fa-solid fa-circle-check"></i> Experience 1</h4>
          <form className='row bg-danger w-100' >
            <div class="input-container col-md-4">
            <i class="fa-solid fa-building"></i>
              <input type="text" className='form-control p-2 my-4' placeholder='Organisation *' />

            </div>
            <div class="input-container col-md-4">
            <i class="fa-solid fa-couch"></i>
              <input type="text" className='form-control p-2 my-4' placeholder='Position *' />

            </div>
         
          </form>
        </div>
        {/* <div className="row justify-content-around ">
          <div className="col-lg-5 ">
            <div className='px-5'>
              <form >
                <input type="text" className='form-control p-2 my-4' placeholder='Full Name*' />
                <div class="input-container">
                  <i class="fa-solid fa-envelope fa-lg"></i>
                  <input type="email" className='form-control p-2 my-4' placeholder='Email *' />
                </div>
                <div class="input-container">
                  <i class="fa-solid fa-globe fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Your Portfolio ' />

                </div>
                <div class="input-container">
                  <i class="fa-brands fa-linkedin fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Linkedin *' />
                </div>
                <Link to='../'>
                <div className='text-end'>
                  <button className=' btn btn-main-disable px-3'>
                    <i class="fa-solid fa-angle-left me-2"></i>
                    Back</button>
                </div>
                </Link>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className='px-5'>
              <form >
                <input type="text" className='form-control p-2 my-4' placeholder='Enter your title eg.Frontend developer *' />
                <div class="input-container">
                  <i class="fa-solid fa-phone fa-lg"></i>
                  <input type="tel" className='form-control p-2 my-4' placeholder='Phone number *' />
                </div>
                <div class="input-container">
                  <i class="fa-brands fa-square-github fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='GitHub ' />

                </div>
                <div class="input-container">
                  <i class="fa-brands fa-facebook fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Facebook *' />
                </div>
                <Link to='../projects'>
                  <button className=' btn btn-main px-3'>
                    Next
                    <i class="fa-solid fa-angle-right ms-2"></i></button>
                </Link>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
