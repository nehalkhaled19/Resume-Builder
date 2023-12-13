import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContect } from '../../ContextForm'
import { useFormik } from 'formik'
// useContext
export default function EducationDetails() {
  let { educate, setEducate } = useContext(FormContect)
  const navigate = useNavigate();
 
  // TO add education
  const [educationNum, setEducationNum] = useState(1)
  const [education, setEducation] = useState(() => {
    return localStorage.getItem('educationNum') !== null
      ? localStorage.getItem('educationNum').split(',')
      : [educationNum];
  });

 // Formik
 const forms = useFormik({
  initialValues: {
    educations: education.map((e) => ({
      organisation: '',
      startDate: '',
      endDate: '',
      position: '',
      description: '',
    })),
  },
  onSubmit: (values) => {
    setEducate(values)
    navigate('../skills')
    // You can save or handle the entire form data here
  }
})


  useEffect(() => {
  
  // date input
  document.querySelectorAll(".lastYear").forEach((button) => {
    button.addEventListener("focus", (e) => {
      e.target.setAttribute("type", "date");
    })
  })
  document.querySelectorAll(".firstYear").forEach((button) => {
    button.addEventListener("focus", (e) => {
      e.target.setAttribute("type", "date");
    })
  })
  

  }, []);
  


  useEffect(() => {
    const handleAddEducationClick = () => {
      const updatedEducationNum = educationNum + 1;
      setEducationNum(updatedEducationNum);
      setEducation((prevEducation) => {
        const updatedEducation = [...prevEducation, updatedEducationNum];
        localStorage.setItem('educationNum', updatedEducation.join(','));
        return updatedEducation;
      });
    };
  
    document.getElementById("addEducation")?.addEventListener("click", handleAddEducationClick);
  
 
    // Cleanup function
    return () => {
      document.getElementById("addEducation")?.removeEventListener("click", handleAddEducationClick);
    };
  }, [education, educationNum]);
  
  // to remove
  function remove(){
    setEducation((prevEducation) => {
      if (prevEducation.length > 0) {
        const updatedEducation = prevEducation.slice(0, -1);
        localStorage.setItem('educationNum', updatedEducation.join(','));
        return updatedEducation;
      } else {
        return prevEducation;
      }
    });
  }


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
            <form  onSubmit={forms.handleSubmit}>
            {education?.map((element, index) => <section className=' my-4' key={index}>
            <div className='text-end mb-2'>
            {index != 0 ?  <i type='button' onClick={()=>remove()} className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i>:"" }  
</div>
              {/* form */}
              <section className='row  pb-4 border-bottom ' >

              
                {/* row one */}
                <div className=" col-md-6 my-2">
                  <div className="input-container">
                  <i className="fa-solid fa-graduation-cap"></i>
                    <input type="text" className='form-control' defaultValue={educate != 'false' ? educate.educations[index]?.unviersity : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].unviersity`} id='unviersity'  placeholder='College/Unviersity *' />

                  </div>
                </div>
                    <div className=" col-md-6 my-2 ">
                  <div className="input-container">
                  <i className="fa-solid fa-scroll"></i>
                    <input type="text" className='form-control p-2 ' placeholder='Degree *' defaultValue={educate != 'false' ? educate.educations[index]?.degree : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].degree`} id='degree'  />
                  </div>
                  </div>
                <div className=" col-md-6 my-2">
                  <div className="input-container">
                    <input placeholder='Start Date' type='text' className='form-control cursor firstYear' defaultValue={educate != 'false' ? educate.educations[index]?.firstYear : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].firstYear`} id='firstYear' />
                  </div>
                </div>
                <div className=" col-md-6 my-2">
                  <div className="input-container">
                    <input placeholder='End Date' type='text' className='form-control  cursor lastYear' defaultValue={educate != 'false' ? educate.educations[index]?.lastYear : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`educations[${index}].lastYear`} id='lastYear'  />
                  </div>
                </div>
              </section>
            </section>)}

            {/* buttons */}
            <div className='w-100 text-center mt-2'>
              <Link to='../projects'>
                <button type='button' className=' btn btn-main-disable px-3 m-2'>
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
