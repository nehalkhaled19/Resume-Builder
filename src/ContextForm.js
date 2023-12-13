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
    address: '',
    description:''
  });
  const [exper, setExper] = useState('false')
  const [pro, setPro] = useState('false')
  const [educate, setEducate] = useState('false')
  const [technical, setTechnical] = useState([])
  const [personalSkills, setPersonalSkills] = useState([])
  const [languages, setLanguages] = useState([])


console.log(technical);
console.log(personalSkills);
console.log(languages);

  return <FormContect.Provider value={{ personal, personalSkills,languages,technical ,setPersonal, exper, setExper, pro, setPro, educate, setEducate,setTechnical,setLanguages,setPersonalSkills }}>
    {props.children}
  </FormContect.Provider>
}