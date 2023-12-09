import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {

// to add projects
  const [projectNum, setProjectNum] = useState(1)
  const [project, setProject] = useState(() => {
    return localStorage.getItem('projectNum') !== null
      ? localStorage.getItem('projectNum').split(',')
      : [projectNum];
  });

// to remove
  useEffect(()=>{
    document.querySelectorAll(".btn-remove").forEach((button) => {
      button.addEventListener("click", ()=>{
        setProject((prevProject) => {
          // Ensure the array is not empty before removing the last item
          if (prevProject.length > 0) {
            const updatedProject = prevProject.slice(0, -1);
            // Save the updatedProject array to local storage
           console.log( updatedProject);
            localStorage.setItem('projectNum', updatedProject);
            return updatedProject;
          } else {
            return prevProject;
          }
        });
      })
    })
  } , [])
  // to add
  useEffect(() => {
    document.getElementById("addProject")?.addEventListener("click", () => {
      const updatedProjectNum = projectNum + 1;
      setProjectNum(updatedProjectNum);
      setProject([...project, updatedProjectNum]);
    localStorage.setItem('projectNum', [...project, updatedProjectNum]);

    });
  }, [project]);


  return    <section className='py-5 h-auto container d-flex align-items-center home '>
  <header className='border border-2 pb-3 container-form w-100'>
    <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Projects </h2>
    <div className=' mx-md-5 mx-3 mt-3 mb-3'>
      {/* to add Project */}
      <div className='w-100 my-4 text-end'>
        <button id='addProject' className='btn btn-add  ms-auto'>
          <i className="fa-solid fa-plus mx-2"></i>
          Add New Project </button>
      </div>
      {/* Project */}
      {project?.map((e, index) => <section className=' my-4' id={e}>
      <div className='d-flex justify-content-between align-items-center'>
            <h4 className='my-3' style={{ color: '#2590e8' }}>
              <i className="fa-solid fa-circle-check"></i> Project {index + 1}</h4>
              {index != 0 ?  <i className="fa-solid fa-circle-xmark fa-xl btn-remove" ></i>:"" }  
</div>
      {/* form */}
      <form className='row  pb-4 border-bottom ' >

        {/* row one */}
        <div className=" col-md-6 my-2">
          <div className="input-container">
          <i className="fa-solid fa-t"></i>
            <input type="text" className='form-control  ' placeholder='Title *' />

          </div>
        </div>
        <div className=" col-md-6 my-2">
          <div className="input-container">
          <i className="fa-solid fa-link"></i>
            <input type="text" className='form-control  ' placeholder='Link *' />
          </div>
        </div>
        <div className="col-md-12 my-2">
        <div className="input-container">
        <i className="fa-solid fa-file-lines"></i>
          <textarea className='form-control p-2' rows={1} placeholder='Description *' />
        </div>
        </div>
      </form>
      </section>)}

      {/* buttons */}
      <div className='w-100 text-center mt-2'>
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
