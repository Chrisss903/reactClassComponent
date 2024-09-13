import React from 'react';
import "./SematicElements.css";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div className="OuterNav">

                <nav className="NavBar">

                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/About">About</Link></ul>
                    <ul><Link to="/Dashboard">Dashboard</Link></ul>
                    <ul><Link to="/User/1">User1</Link></ul>
                    <ul><Link to="/User/2">User2</Link></ul>

                </nav>

            </div>
        );
    }

}

export default NavBar;
