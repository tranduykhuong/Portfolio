import React from "react";
import classes from './theme.module.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from "react";

const root = document.querySelector(':root');

export function setDarkTheme() {
    root.style.setProperty('--text-color', '#ccc');
    root.style.setProperty('--title-color', '#fff');
    root.style.setProperty('--title-info', '#b3b3b3');
    root.style.setProperty('--text-info', '#fff');
    root.style.setProperty('--bg-color', 'linear-gradient(to right bottom, rgba(22, 46, 57, 0.7), rgba(2, 37, 46, 0.5))');
    root.style.setProperty('--background-color', 'linear-gradient(45deg, #23397e, #056b79)');
}

export function setLightTheme() {
    root.style.setProperty('--text-color', 'rgb(47, 47, 47)');
    root.style.setProperty('--title-color', '#333');
    root.style.setProperty('--title-info', '#808080');
    root.style.setProperty('--text-info', '#444444');
    root.style.setProperty('--bg-color', 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))');
    root.style.setProperty('--background-color', 'linear-gradient(to right top, #58aec3, #ccdde4)');
}

const ToggleTheme = () => {
    const [lightTheme, setTheme] = useState(true);

    if (!lightTheme) setDarkTheme();
    else setLightTheme();

    return (
        <div className={classes.toggleTheme}>
            <input type='checkbox' id='checkbox' className={classes.checkbox} 
                onClick={() => setTheme(prev => !prev)}
            />
            <label for="checkbox" className={classes.labelToggle}>
                <FaSun className={classes.faSun} />
                <FaMoon className={classes.faMoon} />
                <div className={classes.ball}></div>
            </label>
        </div>
    );
}

export default ToggleTheme;