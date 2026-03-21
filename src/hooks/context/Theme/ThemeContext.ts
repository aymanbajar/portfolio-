import {useContext ,createContext} from 'react';

 interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {}
});
export const useTheme = () => useContext(ThemeContext);