import { createContext, useState } from "react";

const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    const handleLanguage = (e) => {
        const newLanguage = e.target.value
        setLanguage(newLanguage)
        
    }
    return(
        <LanguageContext.Provider value={{ language, handleLanguage }}>
            {children}  
        </LanguageContext.Provider>
    )
}

export default LanguageContext