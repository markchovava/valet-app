import { createContext, useContext, useState } from "react";


export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
  const [isHamburger, setIsHamburger] = useState(false)
    
  return (
    <div>
      <MainContext.Provider value={{
        isHamburger, 
        setIsHamburger
      }}>
        {children}
      </MainContext.Provider>
    </div>
  )
}
export default MainContextProvider;


export const MainContextState = () => {
    return useContext(MainContext)
  }