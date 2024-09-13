import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();
    const onAbout = () => { navigate('/About') }
    const onDash = () => { navigate('/Dashboard') }
    return (
        <>
            <h1>This is Home Page</h1>

            <button onClick={onAbout}>Go to About </button>
            <button onClick={onDash}>Go to Dashboard</button>

        </>
    )
}

export default Home