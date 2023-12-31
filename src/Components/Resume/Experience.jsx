import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContect } from '../../ContextForm'
import { useFormik } from 'formik'

export default function Experience() {
  let { exper, setExper } = useContext(FormContect)
  const navigate = useNavigate();
 
  // to add
  const [experienceNum, setExperienceNum] = useState(1)
  const [experience, setExperience] = useState(() => {
    return localStorage.getItem('experienceNum') !== null
      ? localStorage.getItem('experienceNum').split(',')
      : [experienceNum];
  });

  useEffect(() => {
    // to remove


    // date input
    document.querySelectorAll(".endDate").forEach((button) => {
      button.addEventListener("focus", (e) => {
        e.target.setAttribute("type", "date");
      })
    })
    document.querySelectorAll(".startDate").forEach((button) => {
      button.addEventListener("focus", (e) => {
        e.target.setAttribute("type", "date");
      })
    })

  }, [])

  // to add experience
  useEffect(() => {
    // to add
    document.getElementById("addExperience")?.addEventListener("click", () => {
      const updatedExperienceNum = experienceNum + 1;
      setExperienceNum(updatedExperienceNum);
      setExperience([...experience, updatedExperienceNum]);
      localStorage.setItem('experienceNum', [...experience, updatedExperienceNum]);

    });

    // Update form values whenever experience changes
    forms.setValues({
      ...forms.values,
      experiences: experience.map((e) => ({
        organisation: '',
        startDate: '',
        endDate: '',
        position: '',
        description: '',
      })),
    });
  }, [experience]);



  // Formik
  const forms = useFormik({
    initialValues: {
      experiences: experience.map((e) => ({
        organisation: '',
        startDate: '',
        endDate: '',
        position: '',
        description: '',
      })),
    },
    onSubmit: (values) => {
      setExper(values)
      navigate('../projects')
      // You can save or handle the entire form data here
    }
  })

function remove(){
  setExperience((prevExperience) => {
    // Ensure the array is not empty before removing the last item
    if (prevExperience.length > 0) {
      const updatedExperience = prevExperience.slice(0, -1);
      // Save the updated array to local storage
      localStorage.setItem('experienceNum', updatedExperience);
      return updatedExperience;
    } else {
      return prevExperience;
    }
  });
}
   
 
  return (
    <div className='py-5 container h-auto d-flex align-items-center home ' >
      <header className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Experience Details</h2>
        <div className=' mx-md-5 mx-3 mt-3 mb-3'>
          {/* to add experience */}
          <div className='w-100 text-end'>
            <button id='addExperience' className='btn btn-add  ms-auto' >
              <i className="fa-solid fa-plus mx-2"></i>
              Add New Experience </button>
          </div>
          {/* experience */}
          <form onSubmit={forms.handleSubmit}>
            {experience?.map((e, index) => <section className=' my-2' key={e}>
              <div className='d-flex justify-content-between align-items-center'>
                <h4 className='my-3' style={{ color: '#2590e8' }}>
                  <i className="fa-solid fa-circle-check"></i> Experience {index + 1}</h4>

                {index != 0 ? <i type="button" onClick={()=>remove()} className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i> : ""}
              </div>
              {/* form */}

              <div className='row  border-bottom  pb-3' >

                {/* row one */}
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                    <i className="fa-solid fa-building"></i>

                    <input type="text" className='form-control' defaultValue={exper != 'false' ? exper.experiences[index]?.organisation : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`experiences[${index}].organisation`} id='organisation' placeholder='Organisation *' />

                  </div>
                </div>
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                    <input placeholder='Start Date' defaultValue={exper != 'false' ? exper.experiences[index]?.startDate : ''} type='text' className='form-control startDate cursor' id="startDate" onBlur={forms.handleBlur} onChange={forms.handleChange} name={`experiences[${index}].startDate`} />
                  </div>
                </div>

                <div className=" col-md-4 my-2">
                  <div className="input-container">
                    <input placeholder='End Date' defaultValue={exper != 'false' ? exper.experiences[index]?.endDate : ''} type='text' className='form-control endDate cursor' id="endDate" onBlur={forms.handleBlur} onChange={forms.handleChange} name={`experiences[${index}].endDate`} />
                  </div>
                </div>

                {/* row two */}
                <div className=" col-md-4 my-2  ">
                  <div className="input-container">
                    <i className="fa-solid fa-couch"></i>
                    <input type="text" className='form-control p-2 ' defaultValue={exper != 'false' ? exper.experiences[index]?.position : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} id='position' placeholder='Position *' name={`experiences[${index}].position`} />
                  </div>

                </div>
                <div className=" col-md-8 my-2 ">
                  <div className="input-container">
                    <i className="fa-solid fa-file-lines"></i>
                    <textarea className='form-control p-2 ' defaultValue={exper != 'false' ? exper.experiences[index]?.description : ''} rows={1} id='description' onBlur={forms.handleBlur} onChange={forms.handleChange} placeholder='Description *' name={`experiences[${index}].description`} />
                  </div>
                </div>



              </div>


            </section>)}
            {/* buttons */}
            <div type="submit" className='w-100 text-center mt-2 pt-4'>
              <Link to='../'>
                <button type='button' className=' btn btn-main-disable px-3 mx-2'>
                  <i className="fa-solid fa-angle-left me-2"></i>
                  Back
                </button>
              </Link>

              <button type='submit' className=' btn btn-main px-3 mx-2'>
                Next
                <i className="fa-solid fa-angle-right ms-2"></i></button>

            </div>
          </form>

        </div>

      </header>
    </div >
  )
}
