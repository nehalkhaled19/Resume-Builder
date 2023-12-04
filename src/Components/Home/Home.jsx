import React from 'react'
import img1 from '../../images/home-img-1.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return <>
      <div className='py-5 my-4 container d-flex align-items-center home' >
      <div className="row  justify-content-around">

      <div className='col-lg-6 '>
          <img src={img1} className='' style={{objectFit:'cover',width:'95%',backgroundColor: 'rgba(0, 0, 0, 0)'}} alt="home-img" />
        </div>
        <div className='col-lg-5 px-4 py-5 d-flex flex-column justify-content-center '>
          <h1 >Build a professional resume for free </h1>
          <p style={{ color: '#2d2d2d', fontSize: '20px' }} className='my-3'>Create your resume easily with our free builder and professional templates.</p>
          {/* <button className='btn btnNav mt-4 '>Create My Resume</button>
          */}
          <Link to={'resume'}>
          <button className='btn btnNav'>Create My Resume</button>
          </Link>
        </div>
       
      </div>
    </div>
  </>
}
