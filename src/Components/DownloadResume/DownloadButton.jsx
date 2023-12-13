import { FormContect } from "../../ContextForm.js";
import MyResume from "./MyResume.jsx";
import React, { useContext } from 'react'
import './CV.css'
export default function DownloadButton() {
  const { personal, exper, pro, educate, technical, personalSkills, languages } = useContext(FormContect);

  return <>
  <div className=" text-end mt-3">
        <MyResume 
          downloadFileName="Resume.Pdf" 
          rootElementId="testId" 
        />
        </div>
        <div className="container container-resume my-4 border shadow">
        <div id="testId"> 
     
<body className="A4 px-3">
  <div className="sheet">
  
    <div className="two-column  resume ">
      <section className="resume__section resume__header">
        <div className="resume__content border-bottom pb-2">
          <h1>{personal.name}| <span className="h3">{personal.title}</span></h1>
          <div className="info-item"><span className="info-label"><i className="fa fa-location-arrow"></i></span><span className="info-text">
          {personal.address}</span></div>
          <div className="info-item"><span className="info-label"><i className="fa fa-envelope"></i></span><span className="info-text">{personal.email}</span></div>
          <div className="info-item"><span className="info-label"><i className="fa fa-phone"></i></span><span className="info-text">{personal.phone}</span></div>
        </div>
      </section>
      <div className="resume__columns row" >
        <div className="resume__main col-lg-8">
          <section className="resume__section resume__summary">
            <div className="resume__content pb-2 border-bottom">
              <div className="resume__section-title"><i className="fa fa-pencil"></i>
                <h2>Professional Summary</h2>
              </div>
              <div className="other">
                <div className="other-info">
                  <p>
                  {personal.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="resume__section resume__experience">
            <div className="resume__content pb-2 border-bottom">
              <div className="resume__section-title"><i className="fa fa-briefcase"></i>
                <h2>Work Experiences</h2>
              </div>
              {exper.experiences?.map((e) => {
                  return     <div className="xp-item">
                <div className="xp-job">
                {e.position}
                  <br/><small>{e.organisation}</small>
                </div>
                <div className="xp-date">{e.startDate} / {e.endDate}</div>
                <div className="xp-detail">
                 <p>{e.description}</p>
                </div>
              </div> })}
           
            </div>
          </section>
          <section className="resume__section resume__experience">
            <div className="resume__content pb-2 border-bottom">
              <div className="resume__section-title"><i className="fa-solid fa-file"></i>
                <h2>Projects</h2>
              </div>
              {pro.projects?.map((e) => {
                  return     <div className="xp-item">
                <div className="xp-job">
                {e.title}
                  <br/><small>{e.link}</small>
                </div>
             
                <div className="xp-detail">
                 <p>{e.description}</p>
                </div>
              </div> })}
           
            </div>
          </section>
          <section className="resume__section resume__experience pb-2 border-bottom">
            <div className="resume__content">
              <div className="resume__section-title"><i className="fa-solid fa-graduation-cap"></i>
                <h2>Education</h2>
              </div>
              {educate.educations?.map((e) => {
                  return     <div className="xp-item">
                <div className="xp-job">
                {e.degree}
                  <br/><small>{e.unviersity}</small>
                </div>
                <div className="xp-date">{e.firstYear} / {e.lastYear}</div>
                <div className="xp-detail">
                 <p>{e.description}</p>
                </div>
              </div> })}
           
            </div>
          </section>
        </div>
        <div className="resume__side border-start ps-lg-4 col-lg-4">
          <section className="resume__section resume__skills pb-2 border-bottom">
            <div className="resume__content">
              <div className="resume__section-title"><i className="fa-solid fa-laptop-code"></i>
                <h2>Technical Skills</h2>
              </div>
              <ul className="resume__text basic-ul">
              {technical?.map((e)=>{
                return <il className="extra my-1">
                  <div className="extra-info">{e}</div>
             
                </il>})}
               
                </ul>
            
             
            </div>
          </section>
          <section className="resume__section resume__skills pb-2 border-bottom">
            <div className="resume__content">
              <div className="resume__section-title"><i className="fa-solid fa-user"></i>
                <h2>Personal Skills</h2>
              </div>
              <ul className="resume__text">
              {personalSkills?.map((e)=>{
                return <li className="extra my-1">
                  <div className="extra-info">{e}</div>
             
                </li>})}
               
                </ul>
            
             
            </div>
          </section>
          <section className="resume__section resume__languages pb-2 border-bottom">
            <div className="resume__content">
              <div className="resume__section-title"><i className="fa fa-globe"></i>
                <h2>Languages</h2>
              </div>
              <ul className="resume__text">
              {languages?.map((e) => {
                return     <li className="extra my-2">
                <div className="extra-info">Portuguese </div>
              </li>
              })}
          
          </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</body>

        </div>
        </div>
    </>
}
