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
      const [exper, setExper] = useState({
        name: '',
        email: '',
        portfolio: '',
        linkedin: '',
        phone: '',
        title: '',
        github: '',
        facebook: '',
      });
    return <FormContect.Provider value={{personal,setPersonal,exper,setExper }}>
        {props.children}
    </FormContect.Provider>
}