import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import $ from 'jquery'
import Tagify from '@yaireo/tagify'
import { FormContect } from '../../ContextForm'
import DownloadButton from '../DownloadResume/DownloadButton';
import MyResume from '../DownloadResume/MyResume'
import '../DownloadResume/CV.css'
export default function Skills() {
  let { setTechnical, setLanguages, setPersonalSkills } = useContext(FormContect)

  useEffect(() => {
    let inputs = document.querySelectorAll('.tags-input');
    inputs.forEach(function (input) {
      // Check if Tagify is not already applied to the element
      if (!input.classList.contains('tagify')) {
        new Tagify(input, { maxTags: 15 });
      }
    });

    $('.tagify').addClass('form-control');
    // to get skills
    $('.tagify').on('keyup', () => {
      getSkills()
    })
  
  }, [])
  function getSkills() {
    // for languages
    let lan = []
    let languages = $('#languages tags').find('.tagify__tag').map(function () {
      lan.push($(this).attr('value'))
    })
    setLanguages(lan)
    // for Technical
    let tec = []
    let technicalTitles = $('#technicalSkills tags').find('.tagify__tag').map(function () {
      tec.push($(this).attr('value'))
    })
    setTechnical(tec)
    // for Technical
    let per = []
    let PersonalTitles = $('#personalSkills tags').find('.tagify__tag').map(function () {
      per.push($(this).attr('value'))
    })
    setPersonalSkills(per)
  }

  return <section className='py-5 h-auto  container d-flex align-items-center home '>
    <header className='border border-2 pb-3 container-form w-100'>
      <h2 className='text-center py-4 border border-1 m-3 shadow-sm'>Skills </h2>
      <div className=' mx-md-5 mx-3 mt-3 mb-3'>

        {/* form */}
        <form className='row  pb-4 border-bottom ' >


          <div className=" col-md-12 my-3" id='technicalSkills'>
            <input name="technical" placeholder=" Enter your Technical Skills" className='form-control tags-input' defaultValue="" />
          </div>
          <div className=" col-md-12 my-3" id='personalSkills'>
            <input name="personal" placeholder="  Enter your Interpersonal Skills" className='form-control tags-input' defaultValue="" />
          </div>
          <div className="col-md-12 my-3" id='languages'>
            <input name="languages" placeholder="Languages" className='form-control tags-input' defaultValue="" />
          </div>
        </form>


        {/* buttons */}
        <div className='w-100 text-center mt-2'>
          <Link to='../education'>
            <button className=' btn btn-main-disable px-3 m-2'>
              <i className="fa-solid fa-angle-left me-2"></i>
              Back
            </button>
          </Link>

          <Link to={'../cv'}>
            <button className=' btn btn-main  px-3'>
              See Your Resume
              <i className="fa-solid fa-angle-right ms-2"></i></button>
          </Link>
        </div>



      </div>

    </header>
  </section >
}
