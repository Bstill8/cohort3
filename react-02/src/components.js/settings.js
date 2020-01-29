import React from 'react'
import ThemeContext from '../ThemeContext'
function Settings() {
    return (
        <div>
            <ThemeContext.Consumer>
                {({ color, fontSize, changeColor}) => (
                    <div style={{color: color, fontSize: fontSize}}>
                        <h1>Settings</h1>
                        <input type="radio" name="color" value="red" checked={color === "#ff0000"} onClick={() => changeColor('red')} />Red
                        <input type="radio" name="color" value="blue" checked={color === "#4287f5"} onClick={() => changeColor('blue')} />Blue
                        <input type="radio" name="color" value="green" checked={color === "#45f542"} onClick={() => changeColor('green')} />Green <br />
                        {/* <input type="radio" name="font" value="small" checked={fontSize === "8px"} onClick={() => changeFont('small')}/>Small
                        <input type="radio" name="font" value="medium" checked={fontSize === "16px"} onClick={() => changeFont('medium')}/>Medium
                        <input type="radio" name="font" value="large" checked={fontSize === "32px"} onClick={() => changeFont('large')}/>Large */}
                    </div>
                    
                )}
            </ThemeContext.Consumer> 
        </div>
    );
}
export default Settings;