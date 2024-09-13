import React, { useContext, useEffect, useRef } from 'react';
import { LoginContext } from './UseContext';

function MainPage() {
    const { theme, toggleTheme } = useContext(LoginContext);
    const divRef = useRef(null);


    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = theme === 'light' ? 'white' : 'black';
            divRef.current.style.color = theme === 'light' ? 'black' : 'white';
        }
    }, [theme]);

    return (
        <div ref={divRef}>
            <p>This is the {theme} page</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default MainPage;
