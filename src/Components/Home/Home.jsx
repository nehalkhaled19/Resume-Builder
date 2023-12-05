import React, { useEffect } from 'react'
import img1 from '../../images/home-img-1.png'
import { Link } from 'react-router-dom'
import TypeIt from "typeit";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {


  return <>
    <div className='py-5 my-4 container d-flex align-items-center home' >
      <div className="row  justify-content-around  w-100">

        <div className='col-lg-6 '>
          <img src={img1} className='' style={{ objectFit: 'cover', width: '95%', backgroundColor: 'rgba(0, 0, 0, 0)' }} alt="home-img" />
        </div>
        <div className='col-lg-5 px-1 py-1 d-flex flex-column justify-content-center'>
          <h1 >
            <TypeAnimation className='home-h1'
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Build ',
               250,
                'Build a ',
               250,
                'Build a professional ',
               250, 
                'Build a professional resume ',
               250, 
                'Build a professional resume for',
               250,
                'Build a professional resume for free',
               250,
                'Build a professional resume for ',
               250,
                'Build a professional resume ',
               250,
                'Build a professional ',
               250,
                'Build ',
               250,
                '',
               250,
              ]}
              speed={60}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
              deletionSpeed={70}
            />
          </h1>


          <p style={{ color: '#2d2d2d', fontSize: '20px' }} className='my-3'>Create your resume easily with our free builder and professional templates.</p>
          <Link to={'resume'}>
            <button className='btn btn-main btn-home'>Create My Resume</button>
          </Link>
        </div>

      </div>
    </div>
  </>
}
