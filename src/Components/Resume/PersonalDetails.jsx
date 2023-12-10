import { Formik, useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { FormContect } from '../../ContextForm'

export default function PersonalDetails() {
  let { personal, setPersonal } = useContext(FormContect)
  const navigate = useNavigate();
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, 'Enter a valid name'),
    email: Yup.string().email('Enter a valid email'),
    phone: Yup.string().matches(/^\d+$/, 'Enter a valid phone number'),
    title: Yup.string(),
  });

  // Formik
  const forms = useFormik({
    initialValues: {
      name: '',
      email: '',
      portfolio: '',
      linkedin: '',
      phone: '',
      title: '',
      github: '',
      facebook: '',
    },
    onSubmit: (values) => {
      setPersonal(values);
      navigate('experience');
    },
    validationSchema, 
  });


  return (
    <section className='py-5  container px-0 d-flex align-items-center home h-auto' style={{ overflow: 'hidden' }} >
      <div className='border border-2 pb-3 container-form w-100'>
        <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Personal Details</h2>
        {/* form */}
        <form className="row justify-content-around pt-4" onSubmit={forms.handleSubmit}>
          <div className="col-lg-5 ">
            <div className='px-md-5 px-2'>
              <div>
                <div className='my-3'>

                  <input defaultValue={personal.name} type="text" name='name' id='name' className='form-control p-2' placeholder='Full Name*' onChange={forms.handleChange} onBlur={forms.handleBlur}
                  />
                </div>
                {forms.touched.name && forms.errors.name ? (<p className="text-danger">{forms.errors.name}</p>) : ''}

                <div className="input-container my-3 ">
                  <i className="fa-solid fa-envelope fa-lg"></i>
                  <input defaultValue={personal.email} onBlur={forms.handleBlur} onChange={forms.handleChange} type="email" name='email' id='email' className='form-control p-2' placeholder='Email *' />
                </div>
                {forms.touched.email && forms.errors.email ? <p className="text-danger">{forms.errors.email}</p> : ""}

                <div className="input-container my-3">
                  <i className="fa-solid fa-globe fa-lg"></i>
                  <input defaultValue={personal.portfolio} onBlur={forms.handleBlur} onChange={forms.handleChange} type="text" name='portfolio' id='portfolio' className='form-control p-2 ' placeholder='Your Portfolio ' />

                </div>

                 <div className="input-container my-lg-3 mb-0">
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                  <input type="text" defaultValue={personal.linkedin} onBlur={forms.handleBlur} onChange={forms.handleChange} name='linkedin' id='linkedin' className='form-control p-2 ' placeholder='Linkedin *' />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='px-md-5 px-2'>
              <section >
                <div className='my-3'>
                  <input type="text" name='title' id='title' onBlur={forms.handleBlur} onChange={forms.handleChange} defaultValue={personal.title} className='form-control p-2 ' placeholder='Enter your title eg.Frontend developer *' />
                </div>

                <div className="input-container my-3">
                  <i className="fa-solid fa-phone fa-lg"></i>
                  <input defaultValue={personal.phone} onBlur={forms.handleBlur} onChange={forms.handleChange} type="tel" name='phone' id='phone' className='form-control p-2' placeholder='Phone number *' />

                </div>
                {forms.touched.phone && forms.errors.phone ? <p className="text-danger">{forms.errors.phone}</p> : ""}

                <div className="input-container  my-3">
                  <i className="fa-brands fa-square-github fa-lg"></i>
                  <input defaultValue={personal.github} type="text" onBlur={forms.handleBlur} onChange={forms.handleChange} name='github' id='github' className='form-control p-2' placeholder='GitHub ' />
                </div>
                <div className="input-container  my-3">
                  <i className="fa-brands fa-facebook fa-lg"></i>
                  <input defaultValue={personal.facebook} type="text" onBlur={forms.handleBlur} onChange={forms.handleChange} name='facebook' id='facebook' className='form-control p-2' placeholder='Facebook *' />
                </div>
              </section>
            </div>
          </div>
          {/* buttons */}
          <div className=' text-center border-top p-0 pt-3'>

            <button className=' btn btn-main-disable px-3 m-2' style={{ opacity: '0' }}>
              <i className="fa-solid fa-angle-left me-2"></i>
              Back
            </button>

            <button type='submit' className='btn btn-main px-3'>
              Next
              <i className="fa-solid fa-angle-right ms-2"></i>
            </button>

          </div>
        </form>


      </div>
    </section>
  )
}
