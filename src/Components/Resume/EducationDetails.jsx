import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContect } from '../../ContextForm';

export default function EducationDetails() {
  let { educate,setEducate} = useContext(FormContect)
  const navigate = useNavigate();
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
          localStorage.setItem('educationNum', updatedEducation);
          return updatedEducation;
        } else {
          return prevEducation;
        }
      });
    })
  })

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
  

} , [])

  // to add
  useEffect(() => {
    localStorage.setItem('educationNum', education);
    document.getElementById("addEducation")?.addEventListener("click", () => {
      const updatEdeducationNum = educationNum + 1;
      setEducationNum(updatEdeducationNum);
      setEducation([...education, updatEdeducationNum]);
    });
     // Update form values whenever education changes
     forms.setValues({
      ...forms.values,
      educations: education.map((e) => ({
        unviersity: '',
        firstYear: '',
        lastYear: '',
        degree: '',
        description: '',
      })),
    });
  }, [education]);



  // Formik
  const forms = useFormik({
    initialValues: {
      educations: education.map((e) => ({
        unviersity: '',
        firstYear: '',
        lastYear: '',
        degree: '',
        description: '',
      })),
    },
    onSubmit: (values) => {
      setEducate(values)
      navigate('../skills')
      // You can save or handle the entire form data here
    }
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
            <form onSubmit={forms.handleSubmit}>
            {education?.map((e, index) => <section className=' my-4' id={e}>
            <div className='text-end mb-2'>
            {index != 0 ?  <i type='button' className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i>:"" }  
</div>
              {/* form */}
              <section className='row  pb-4 border-bottom ' >

                {/* row one */}
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                  <i className="fa-solid fa-graduation-cap"></i>
                    <input type="text" className='form-control' defaultValue={educate != 'false' ? educate.educations[index].unviersity : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].unviersity`} id='unviersity'  placeholder='College/Unviersity *' />

                  </div>
                </div>
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                    <input placeholder='Start Date' type='text' className='form-control cursor' defaultValue={educate != 'false' ? educate.educations[index].firstYear : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].firstYear`} id='firstYear' />
                  </div>
                </div>
                <div className=" col-md-4 my-2">
                  <div className="input-container">
                    <input placeholder='End Date' type='text' className='form-control  cursor' defaultValue={educate != 'false' ? educate.educations[index].lastYear : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].lastYear`} id='lastYear'  />
                  </div>
                </div>
                {/* row two */}
                <div className=" col-md-4 my-2 ">
                  <div className="input-container">
                  <i className="fa-solid fa-scroll"></i>
                    <input type="text" className='form-control p-2 ' placeholder='Degree *' defaultValue={educate != 'false' ? educate.educations[index].degree : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].degree`} id='degree'  />
                  </div>
                </div>
                <div className=" col-md-8 my-2">
                  <div className="input-container">
                    <i className="fa-solid fa-file-lines"></i>
                    <textarea className='form-control p-2' rows={1} placeholder='Description *' defaultValue={educate != 'false' ? educate.educations[index].description : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].description`} id='description'  />
                  </div>
                </div>
              </section>
            </section>)}

            {/* buttons */}
           {/* buttons */}
            <div className='w-100 text-center mt-2 '>
              <Link to='../projects'>
                <button type='button' className=' btn btn-main-disable px-3 mx-2'>
                  <i className="fa-solid fa-angle-left me-2"></i>
                  Back
                </button>
              </Link>

              <button type="submit" className=' btn btn-main px-3 mx-2'>
                Next
                <i className="fa-solid fa-angle-right ms-2"></i></button>

            </div>
            </form>
          </div>

        </header>
      </section >
    )
  }
