'use client';

import { useState } from 'react';


const ToggleThemeButton = () => {
    const [suntheme, setSunTheme] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const [toggleTheme, setToggleTheme] = useState(true);
    const [bg, setBg] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    const changeTheme = () => {
      setButtonDisabled(true);
      if (toggleTheme) {
        // Sun is visible, add the effect
        setSunTheme(true);
        setDarkTheme(false);
      } else {
        // Moon is visible, add the same effect
        setDarkTheme(true);
        setSunTheme(false);
      }
  
      setTimeout(() => {
        setToggleTheme(!toggleTheme);
        setBg(!bg);
        setButtonDisabled(false);
      }, 2000);
  

    };
  
    console.log(suntheme);
  
    return (
      <button
        className={`w-14 h-14 max-xxsm:w-12 max-xxsm:h-12 flex items-center justify-center rounded-full relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
          bg ? 'bg-[#fbffc286]' : 'bg-[#EBF2FA]'
        }`}
        onClick={changeTheme}
        disabled={buttonDisabled}
      >
        <div className={`w-6 h-6 ${toggleTheme ? (suntheme ? 'changeThemeBtn' : '') : (darkTheme ? 'changeDarkThemeBtn' : '')}`}>
          {toggleTheme ? (
            <img src="sun.png" alt="" className="w-full h-full" />
          ) : (
            <img src="moon.png" alt="" className="w-full h-full" />
          )}
        </div>
      </button>
    );
  };
  
  export default ToggleThemeButton;
  
