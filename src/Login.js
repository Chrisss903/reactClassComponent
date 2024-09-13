import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PassError, setPassError] = useState("");
    let valEmail = false;
    let valPass = false;

    const navigate = useNavigate();

    const validateLogin = (e) => {

        e.preventDefault();

        const regEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/
        const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (regEmail.test(email)) {
            valEmail = true;
        } else {
            valEmail = false;
            setEmailError("Please enter the correct email address")
        }

        if (regPass.test(Pass)) {
            valPass = true;
        } else {
            valPass = false;
            setPassError("Please enter the correct Password")

        }

        if (valEmail && valPass) {
            localStorage.setItem('email', email)
            localStorage.setItem('password', Pass)
            localStorage.setItem('login', true)
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('password', Pass)

            const expires = new Date();
            expires.setFullYear(expires.getFullYear() + 1);
            document.cookie = `email=${encodeURIComponent(email)}; expires=${expires.toUTCString()}; path=/`;
            document.cookie = `password=${encodeURIComponent(Pass)}; expires=${expires.toUTCString()}; path=/`;
            navigate('/');
        }
    }

    return (

        <div className='OuterForm'>

            <form className='LoginOuter' onSubmit={validateLogin}>

                <div style={{ fontSize: '200%' }}>Login Form</div>

                <br />

                <label htmlFor='email'>Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {EmailError && <div className='infoTag'>
                    <img style={{ height: '15px', width: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMlBVffB2jI-S3BuMXwqe9IFFzCD9wxd4Hw&s" alt='workspace'></img>
                    <p style={{ fontSize: "12px", color: 'red' }}>{EmailError}</p>
                </div>}

                <label htmlFor='password'>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={Pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                {PassError && <div className='infoTag'>
                    <img style={{ height: '15px', width: 'auto' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMlBVffB2jI-S3BuMXwqe9IFFzCD9wxd4Hw&s" alt='workspace'></img>
                    <p style={{ fontSize: "12px", color: 'red' }}>{PassError}</p>
                </div>}

                <button>Login</button>


            </form>

        </div >
    );
}

export default Login;
