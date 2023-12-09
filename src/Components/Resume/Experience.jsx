import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Experience() {


  const [experienceNum, setExperienceNum] = useState(1)
  const [experience, setExperience] = useState(() => {
    return localStorage.getItem('experienceNum') !== null
      ? localStorage.getItem('experienceNum').split(',')
      : [experienceNum];
  });

  useEffect(() => {
// to remove
    document.querySelectorAll(".btn-remove").forEach((button) => {
      button.addEventListener("click", ()=>{
        setExperience((prevExperience) => {
          // Ensure the array is not empty before removing the last item
          if (prevExperience.length > 0) {
            const updatedExperience = prevExperience.slice(0, -1);
            // Save the updated array to local storage
           console.log( updatedExperience);
            localStorage.setItem('experienceNum', updatedExperience);
            return updatedExperience;
          } else {
            return prevExperience;
          }
        });
      })
    })

    // date input
    document.getElementById("endDate")?.addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('endDateIcon').style.display = 'none'
    });
    document.getElementById("startDate")?.addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('startDateIcon').style.display = 'none'
    });
  }, [])
  // to add experience
  useEffect(() => {
    // to add
    document.getElementById("addExperience")?.addEventListener("click", () => {
      const updatedExperienceNum = experienceNum + 1;
      setExperienceNum(updatedExperienceNum);
      setExperience([...experience, updatedExperienceNum]);
    localStorage.setItem('experienceNum',[...experience, updatedExperienceNum]);
    });
  }, [experience]);

  return (
    <section className='py-5 container h-auto d-flex align-items-center home '>
      <header className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Experience Details</h2>
        <div className=' mx-md-5 mx-3 mt-3 mb-3'>
          {/* to add experience */}
          <div className='w-100 text-end'>
            <button id='addExperience' className='btn btn-add  ms-auto'>
              <i className="fa-solid fa-plus mx-2"></i>
              Add New Experience </button>
          </div>
          {/* experience */}
          {experience?.map((e, index) => <section className=' my-4' id={e}>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='my-3' style={{ color: '#2590e8' }}>
                <i className="fa-solid fa-circle-check"></i> Experience {index + 1}</h4>
          {index != 0 ?  <i className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i>:"" }   
            </div>
            {/* form */}
            <form className='row pb-4 border-bottom ' >

              {/* row one */}
              <div className=" col-md-4 my-2">
                <div className="input-container">
                  <i className="fa-solid fa-building"></i>
                  <input type="text" className='form-control  ' placeholder='Organisation *' />

                </div>
              </div>
              <div className=" col-md-4 my-2">
                <div className="input-container">
                  <i className="fa-solid fa-calendar-days" id='startDateIcon'></i>
                  <input placeholder='Start Date' type='text' className='form-control  cursor' id="startDate" name="datepicker" />
                </div>
              </div>
              <div className=" col-md-4 my-2">
                <div className="input-container">
                  <i className="fa-solid fa-calendar-days" id='endDateIcon'></i>
                  <input placeholder='End Date' type='text' className='form-control  cursor' id="endDate" name="datepicker" />
                </div>
              </div>
              {/* row two */}
              <div className=" col-md-4 my-2  ">
                <div className="input-container">
                  <i className="fa-solid fa-couch"></i>
                  <input type="text" className='form-control p-2 ' placeholder='Position *' />
                </div>
              </div>
              <div className=" col-md-8 my-2 ">
                <div className="input-container">
                  <i className="fa-solid fa-file-lines"></i>
                  <textarea className='form-control p-2' rows={1} placeholder='Description *' />
                </div>
              </div>
            </form>


          </section>)}

          {/* buttons */}
          <div className='w-100 text-center mt-2'>
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
