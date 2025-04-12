import {createContext, useContext} from "react"

const ThemeContext =createContext("light")

const Context =()=>{
    const theme =useContext(ThemeContext)
    return(
        <ThemeContext.Provider value={"dark"}>
            <div>theme:{theme}</div>
        </ThemeContext.Provider>

    )
}
export default Context