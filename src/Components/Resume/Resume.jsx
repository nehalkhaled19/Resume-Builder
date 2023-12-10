import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Resume() {
  // const sections = {
  //   personalInfo: "Personal Info",
  //   Exper: "Experience",
  //   project: "Projects",
  //   education: "Education",
  //   skill: "Skills",
   
  // };
  // const [resumeInformation, setResumeInformation] = useState({
  //   [sections.personalInfo]: {
  //     id: sections.personalInfo,
  //     sectionTitle: sections.personalInfo,
  //     detail: {},
  //   },
  //   [sections.Exper]: {
  //     id: sections.Exper,
  //     sectionTitle: sections.Exper,
  //     details: [],
  //   },
  //   [sections.project]: {
  //     id: sections.project,
  //     sectionTitle: sections.project,
  //     details: [],
  //   },
  //   [sections.education]: {
  //     id: sections.education,
  //     sectionTitle: sections.education,
  //     details: [],
  //   },
  //   [sections.skill]: {
  //     id: sections.skill,
  //     sectionTitle: sections.skill,
  //     details: [],
  //   },
  // });
  return <>
  <Outlet></Outlet>
  </>
}
