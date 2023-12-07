import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Experience() {
  useEffect(() => {

    document.getElementById("endDate").addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('endDateIcon').style.display = 'none'

    });
    document.getElementById("startDate").addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('startDateIcon').style.display = 'none'
    });
  }, [])
  return (
    <section className='py-5  container d-flex align-items-center home '>
      <header className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Experience Details</h2>
        <div className=' mx-md-5 mx-3 mt-3 mb-3'>
          {/* to add experience */}
          <div className='w-100 my-4 text-end'>
            <button className='btn btn-add  ms-auto'>
              <i className="fa-solid fa-plus mx-2"></i>
              Add New Experience </button>
          </div>
          {/* experience */}
          <section>
            <h4 className='m-0' style={{ color: '#2590e8' }}>
              <i className="fa-solid fa-circle-check"></i> Experience 1</h4>

            {/* form */}
            <form className='row  mb-2 border-bottom ' >

              {/* row one */}
              <div className=" col-md-4 my-4">
                <div className="input-container">
                  <i className="fa-solid fa-building"></i>
                  <input type="text" className='form-control  ' placeholder='Organisation *' />

                </div>
              </div>
              <div className=" col-md-4 my-4">
                <div className="input-container">
                  <i className="fa-solid fa-calendar-days" id='startDateIcon'></i>
                  <input placeholder='Start Date' type='text' className='form-control  cursor' id="startDate" name="datepicker" />
                </div>
              </div>
              <div className=" col-md-4 my-4">
                <div className="input-container">
                  <i className="fa-solid fa-calendar-days" id='endDateIcon'></i>
                  <input placeholder='End Date' type='text' className='form-control  cursor' id="endDate" name="datepicker" />
                </div>
              </div>
              {/* row two */}
              <div className=" col-md-4 mb-4 ">
                <div className="input-container">
                  <i className="fa-solid fa-couch"></i>
                  <input type="text" className='form-control p-2 ' placeholder='Position *' />
                </div>
              </div>
              <div className=" col-md-8 mb-4">
                <div className="input-container">
                  <i class="fa-solid fa-file-lines"></i>
                  <textarea className='form-control p-2' rows={1} placeholder='Description *' />
                </div>
              </div>
            </form>
          </section>

          {/* buttons */}
          <div className='w-100 text-center mt-4'>
            <Link to='../'>
              <button className=' btn btn-main-disable px-3 m-2'>
                <i className="fa-solid fa-angle-left me-2"></i>
                Back
              </button>
            </Link>
            <Link to='../projects'>
              <button className=' btn btn-main px-3 m-2'>
                Next
                <i className="fa-solid fa-angle-right ms-2"></i></button>
            </Link>
          </div>

        </div>

      </header>
    </section >
  )
}
