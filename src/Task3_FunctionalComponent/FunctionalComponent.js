import React, { useState } from 'react'

function FunctionalComponent() {

    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }



    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </>
    )
}

export default FunctionalComponent