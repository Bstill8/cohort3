import React from 'react'
import ThemeContext from '../ThemeContext'
function Settings() {
    return (
        <div>
            <ThemeContext.Consumer>
                {({ color, fontSize, changeColor, changeFont }) => (
                    <div style={{color: color, fontSize: fontSize}}>
                        <input type="radio" name="color" value="red" checked={color === "#ff0000"} onClick={() => changeColor('red')} />Red
                        <input type="radio" name="color" value="blue" checked={color === "#4287f5"} onClick={() => changeColor('blue')} />Blue
                        <input type="radio" name="color" value="green" checked={color === "#45f542"} onClick={() => changeColor('green')} />Green <br />
                        <input type="radio" name="font" value="small" checked={fontSize === '8px'} />Small
                        <input type="radio" name="font" value="medium" checked={fontSize === '16px'} />Medium
                        <input type="radio" name="font" value="large" checked={fontSize === '32px'} />Large
                    </div>
                    
                )}
            </ThemeContext.Consumer> 
        </div>
    );
}
export default Settings;