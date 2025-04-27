import React, { createContext, useState } from 'react'

const ThemeContext=createContext();

const ThemeProvider = ({children}) => {
  const [theme,setTheme]=useState("light");

  const toggleTheme=()=>{
    setTheme(prev=>prev==="light"?"dark":"light");
  }
  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
    </>
  )
}

export  {ThemeContext,ThemeProvider}