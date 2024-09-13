import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate();
    const onHome = () => { navigate('/') }
    const onDash = () => { navigate('/Dashboard') }

    return (
        <>
            <h1>This is About page</h1>
            <button onClick={onHome}>Go to Home </button>
            <button onClick={onDash}>Go to Dashboard</button>

        </>
    )
}

export default About