import React, { useRef, useState } from 'react';

function HookExample() {
    // Create a ref to store the input element
    const intialvalue = useRef(null);

    // Function to focus the input field when button is clicked
    const handleFocus = () => {
        intialvalue.current.focus();
        setState(state + 1)
        // Focuses the input element
    };

    const [state, setState] = useState(0);


    return (
        <>
            <input type="text" ref={intialvalue} onClick={handleFocus} />
            <button>Focus</button>
            <h1>render times : {state}</h1>
        </>
    );
}

export default HookExample;
