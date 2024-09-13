import React, { useState } from 'react'

function ConditionalRendering() {

    const [userValue, setUserValue] = useState(0);


    const handleChange = (e) => {
        setUserValue(Number(e.target.value))
    }

    const conditionalRender = () => {

        if (userValue === 1) {
            return (
                <>
                    <h1>You have Entered One</h1>
                </>
            )
        }
        else {

            switch (userValue) {
                case 2: {
                    return (<>
                        <h1>You have Entered Two</h1>
                    </>)

                }

                case 3: {
                    return (<>
                        <h1>You have Entered Three</h1>
                    </>)

                }

                default: {
                    return (<>
                        <h1>You have Entered value other than 1,2,3</h1>
                    </>)

                }

            }
        }


    }


    return (
        <>
            <h1>Enter a value</h1>
            <input type="text" onChange={handleChange} value={userValue} />
            {conditionalRender()}
            {userValue === 1 &&
                <h1>This is an Example for Conditional rendering</h1>
            }
        </>
    )
}

export default ConditionalRendering