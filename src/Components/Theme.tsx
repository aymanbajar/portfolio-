import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
export default function Theme() {
   const{theme, setTheme} = useTheme ();
    return(
        <>
         <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="p-2 rounded-full   bg-gray-200 hover:bg-gray-300  transition-all duration-300">
                  {theme === "light" ? (
                    <FaMoon className="w-6 h-6 text-gray-800" />
                  ) : (
                    <IoSunny className="w-6 h-6 text-yellow-400" />
                  )}
                  
                </button>
        
        
        </>
    )
}