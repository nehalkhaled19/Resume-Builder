import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContect } from '../../ContextForm';
import { useFormik } from 'formik';

export default function Projects() {
  let { pro, setPro } = useContext(FormContect)
  const navigate = useNavigate();


  // to add projects
  const [projectNum, setProjectNum] = useState(1)
  const [project, setProject] = useState(() => {
    return localStorage.getItem('projectNum') !== null
      ? localStorage.getItem('projectNum').split(',')
      : [projectNum];
  });

  // to add
  useEffect(() => {
    document.getElementById("addProject")?.addEventListener("click", () => {
      const updatedProjectNum = projectNum + 1;
      setProjectNum(updatedProjectNum);
      setProject([...project, updatedProjectNum]);
      localStorage.setItem('projectNum', [...project, updatedProjectNum]);

    });
    // Update form values whenever proience changes
    forms.setValues({
      ...forms.values,
      projects: project.map((e) => ({
        title: '',
        link: '',
        description: '',
      })),
    });
  }, [project]);



  // Formik
  const forms = useFormik({
    initialValues: {
      projects: project.map((e) => ({
        title: '',
        link: '',
        description: '',
      })),
    },
    onSubmit: (values, { setSubmitting }) => {
      // Prevent the default form submission behavior
      setSubmitting(false);
      
      // Handle your form data
      setPro(values);
      navigate('../education');
    },
  });
  // to remove
  function remove(){
    setProject((prevProject) => {
      // Ensure the array is not empty before removing the last item
      if (prevProject.length > 0) {
        const updatedProject = prevProject.slice(0, -1);
        // Save the updatedProject array to local storage
        localStorage.setItem('projectNum', updatedProject);
        return updatedProject;
      } else {
        return prevProject;
      }
  
    });
  }

  return <section className='py-5 h-auto container d-flex align-items-center home '>
    <header className='border border-2 pb-3 container-form w-100'>
      <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Projects </h2>
      <div className=' mx-md-5 mx-3 mt-3 mb-3'>
        {/* to add Project */}
        <div className='w-100  text-end'>
          <button id='addProject' className='btn btn-add  ms-auto'>
            <i className="fa-solid fa-plus mx-2"></i>
            Add New Project </button>
        </div>
        {/* Project */}
        <form onSubmit={forms.handleSubmit}>
        {project?.map((e, index) => <section className=' my-2' key={e}>
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className='my-3' style={{ color: '#2590e8' }}>
              <i className="fa-solid fa-circle-check"></i> Project {index + 1}</h4>
            {index != 0 ? <i type="button" onClick={()=>remove()} className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i> : ""}
          </div>
          {/* form */}
          <div className='row pb-4 border-bottom ' >

            {/* row one */}
            <div className=" col-md-6 my-2">
              <div className="input-container">
                <i className="fa-solid fa-t"></i>
                <input type="text" className='form-control' defaultValue={pro != 'false' ? pro?.projects[index]?.title : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`projects[${index}].title`} id='title'  placeholder='Title *' />

              </div>
            </div>
            <div className=" col-md-6 my-2">
              <div className="input-container">
                <i className="fa-solid fa-link"></i>
                <input type="text" className='form-control' defaultValue={pro != 'false' ? pro?.projects[index]?.link : ''} onBlur={forms.handleBlur} onChange={forms.handleChange} name={`projects[${index}].link`} id='link'  placeholder='Link *' />
              </div>
            </div>
            <div className="col-md-12 my-2">
              <div className="input-container">
                <i className="fa-solid fa-file-lines"></i>
                <textarea className='form-control p-2 ' defaultValue={pro != 'false' ? pro?.projects[index]?.description : ''} rows={1} id='description' onBlur={forms.handleBlur} onChange={forms.handleChange} placeholder='Description *' name={`projects[${index}].description`} />
              </div>
            </div>
          </div>
        </section>)}

        {/* buttons */}
        <div className='w-100 text-center mt-4'>
        <Link to='../experience'>
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
}
