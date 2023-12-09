import React from 'react'
import { Link } from 'react-router-dom'

export default function PersonalDetails() {
  return (
    <section className='py-5  container d-flex align-items-center home '>
      <div className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Personal Details</h2>
{/* form */}
        <div className="row justify-content-around  border-bottom   my-2  ">
          <div className="col-lg-5 ">
            <div className='px-md-5 px-2'>
              <form >
                <input type="text" className='form-control p-2 my-4' placeholder='Full Name*' />
                <div className="input-container">
                  <i className="fa-solid fa-envelope fa-lg"></i>
                  <input type="email" className='form-control p-2 my-4' placeholder='Email *' />
                </div>
                <div className="input-container">
                  <i className="fa-solid fa-globe fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Your Portfolio ' />

                </div>
                <div className="input-container">
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Linkedin *' />
                </div>

              </form>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className='px-md-5 px-2'>
              <form >
                <input type="text" className='form-control p-2 my-4' placeholder='Enter your title eg.Frontend developer *' />
                <div className="input-container">
                  <i className="fa-solid fa-phone fa-lg"></i>
                  <input type="tel" className='form-control p-2 my-4' placeholder='Phone number *' />
                </div>
                <div className="input-container">
                  <i className="fa-brands fa-square-github fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='GitHub ' />

                </div>
                <div className="input-container">
                  <i className="fa-brands fa-facebook fa-lg"></i>
                  <input type="text" className='form-control p-2 my-4' placeholder='Facebook *' />
                </div>
          
              </form>
            </div>
          </div>
        </div>
        
          {/* buttons */}
          <div className='w-100 text-center'>
            <Link style={{opacity:'0'}}>
              <button className=' btn btn-main-disable px-3 m-2'>
                <i className="fa-solid fa-angle-left me-2"></i>
                Back
              </button>
            </Link>
            <Link to={'experience'}>
                  <button className=' btn btn-main px-3'>
                    Next
                    <i className="fa-solid fa-angle-right ms-2"></i></button>
                </Link>
    
          </div>
      </div>
    </section>
  )
}
