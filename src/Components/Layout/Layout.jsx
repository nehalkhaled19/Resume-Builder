import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import MyResume from '../DownloadResume/MyResume'
import { FormContect } from "../../ContextForm.js";
import '../DownloadResume/CV.css'
export default function Layout() {
  const { personal, exper, pro, educate, technical, personalSkills, languages } = useContext(FormContect);


  return <>
     
  <Nav></Nav>
  <Outlet/>
  </>
}
