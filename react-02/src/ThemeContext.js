import React from 'react'

const theme = {
    color: {
        blue: "#4287f5",
        green: "#45f542",
        red: "#ff0000",
    },
    fontSize: {
        small: "8px",
        medium: "16px",
        large: "32px"
    }
    
}
const ThemeContext = React.createContext({color: theme.color.blue, fontSize: theme.fontSize.medium});
export default ThemeContext;

