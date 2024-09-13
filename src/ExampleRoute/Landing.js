// Landing.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Home from './Home';
import NavBar from '../Task2_SemanticElements/navBar';
import User1 from './User1';
import User2 from './User2';

function Landing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/User/:Userinfo" element={<User1 />} />
                <Route path="/User/:Userinfo" element={<User2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Landing;
