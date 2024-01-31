//Proveedor del contexto
import React, {createContext, useState} from "react";

//Creamos el contexto y lo guardamos en una variable
const DarkModeContext = createContext();

const DarkModeProvider = ( {children} ) =>{

    //Establecemos el estado blanco o negro
    const [isDarkMode, setIsDarkMode] = useState(false);

    //Establecemos la funcion de switch
    const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

    return(
        <DarkModeContext.Provider value={{
            //Pasamos el estado y la funcion destructurada en forma de objeto para pasarsela a los componentes hijos que la quieran consumir
            isDarkMode,
            toggleDarkMode,
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider};