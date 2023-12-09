import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EducationDetails() {

  // TO add education
  const [educationNum, setEducationNum] = useState(1)
  const [education, setEducation] = useState(() => {
    return localStorage.getItem('educationNum') !== null
      ? localStorage.getItem('educationNum').split(',')
      : [educationNum];
  });


// to remove
useEffect(()=>{
  document.querySelectorAll(".btn-remove").forEach((button) => {
    button.addEventListener("click", ()=>{
      setEducation((prevEducation) => {
        // Ensure the array is not empty before removing the last item
        if (prevEducation.length > 0) {
          const updatedEducation = prevEducation.slice(0, -1);
          // Save the updatedEducation array to local storage
         console.log( updatedEducation);
          localStorage.setItem('educationNum', updatedEducation);
          return updatedEducation;
        } else {
          return prevEducation;
        }
      });
    })
  })
} , [])

  // to add
  useEffect(() => {
    localStorage.setItem('educationNum', education);
    document.getElementById("addEducation")?.addEventListener("click", () => {
      const updatEdeducationNum = educationNum + 1;
      setEducationNum(updatEdeducationNum);
      setEducation([...education, updatEdeducationNum]);
    });
  }, [education]);

// to handle date
  useEffect(() => {
    document.getElementById("endDate").addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('endDateIcon').style.display = 'none'

    });
    document.getElementById("startDate").addEventListener("focus", function () {
      this.setAttribute("type", "date");
      document.getElementById('startDateIcon').style.display = 'none'
    });
  })
    return (
      <section className='py-5 h-auto  container d-flex align-items-center home '>
        <header className='border border-2 pb-3 container-form w-100'>
          <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Education Details</h2>
          <div className=' mx-md-5 mx-3 mt-3 mb-3'>
            {/* to add Education */}
            <div className='w-100 my-4 text-end'>
              <button id='addEducation' className='btn btn-add  ms-auto'>
                <i className="fa-solid fa-plus mx-2"></i>
                Add New Education </button>
            </div>
            {/* Education */}
            {education?.map((e, index) => <section className=' my-4' id={e}>
            <div className='text-end mb-2'>
            {index != 0 ?  <i className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i>:"" }  
</div>
              {/* form */}
              <form className='row  pb-4 border-bottom ' >

                {/* row one */}
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                  <i className="fa-solid fa-graduation-cap"></i>
                    <input type="text" className='form-control  ' placeholder='College/Unviersity *' />

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
                <div className=" col-md-4 my-2 ">
                  <div className="input-container">
                  <i className="fa-solid fa-scroll"></i>
                    <input type="text" className='form-control p-2 ' placeholder='Degree *' />
                  </div>
                </div>
                <div className=" col-md-8 my-2">
                  <div className="input-container">
                    <i className="fa-solid fa-file-lines"></i>
                    <textarea className='form-control p-2' rows={1} placeholder='Description *' />
                  </div>
                </div>
              </form>
            </section>)}

            {/* buttons */}
            <div className='w-100 text-center mt-2'>
              <Link to='../projects'>
                <button className=' btn btn-main-disable px-3 m-2'>
                  <i className="fa-solid fa-angle-left me-2"></i>
                  Back
                </button>
              </Link>
              <Link to='../skills'>
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
