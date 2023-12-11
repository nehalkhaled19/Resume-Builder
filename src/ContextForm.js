import { createContext, useState, useEffect } from "react";
export let FormContect = createContext()

export default function FormContectProvider(props) {
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    portfolio: '',
    linkedin: '',
    phone: '',
    title: '',
    github: '',
    facebook: '',
  });
  const [exper, setExper] = useState('false')
  const [pro, setPro] = useState('false')
  const [educate, setEducate] = useState('false')
  const [technical, setTechnical] = useState('false')
  const [personalSkills, setPersonalSkills] = useState('false')
  const [languages, setLanguages] = useState('false')


  return <FormContect.Provider value={{ personal, setPersonal, exper, setExper, pro, setPro, educate, setEducate,setTechnical,setLanguages,setPersonalSkills }}>
    {props.children}
  </FormContect.Provider>
}