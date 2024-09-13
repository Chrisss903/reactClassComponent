import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const onHome = () => { navigate('/') }
    const onAbout = () => { navigate('/About') }
    return (
        <>
            <h1>This is DashBoard</h1>
            <button onClick={onHome}>Go to Home </button>
            <button onClick={onAbout}>Go to About</button>
        </>

    )
}

export default Dashboard