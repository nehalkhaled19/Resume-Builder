import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return    <section className='py-5  container d-flex align-items-center home '>
  <header className='border border-2 pb-3 container-form w-100'>
    <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Projects </h2>
    <div className=' mx-md-5 mx-3 mt-3 mb-3'>
      {/* to add Project */}
      <div className='w-100 my-4 text-end'>
        <button className='btn btn-add  ms-auto'>
          <i className="fa-solid fa-plus mx-2"></i>
          Add New Project </button>
      </div>
      {/* Project */}
      <section>
      <h4 className='m-0' style={{ color: '#2590e8' }}>
        <i className="fa-solid fa-circle-check"></i> Project 1</h4>

      {/* form */}
      <form className='row mb-2 border-bottom ' >

        {/* row one */}
        <div className=" col-md-6 my-4">
          <div className="input-container">
          <i class="fa-solid fa-t"></i>
            <input type="text" className='form-control  ' placeholder='Title *' />

          </div>
        </div>
        <div className=" col-md-6 my-4">
          <div className="input-container">
          <i class="fa-solid fa-link"></i>
            <input type="text" className='form-control  ' placeholder='Link *' />
          </div>
        </div>
        <div className="col-md-12 mb-4">
        <div className="input-container">
        <i class="fa-solid fa-file-lines"></i>
          <textarea className='form-control p-2' rows={1} placeholder='Description *' />
        </div>
        </div>
      </form>
      </section>

      {/* buttons */}
      <div className='w-100 text-center mt-4'>
    <Link to='../experience'>
      <button className=' btn btn-main-disable px-3 m-2'>
      <i className="fa-solid fa-angle-left me-2"></i>
        Back
       </button>
    </Link>
    <Link to='../education'>
      <button className=' btn btn-main px-3 m-2'>
        Next
        <i className="fa-solid fa-angle-right ms-2"></i></button>
    </Link>
    </div>

    </div>

  </header>
</section >
}
