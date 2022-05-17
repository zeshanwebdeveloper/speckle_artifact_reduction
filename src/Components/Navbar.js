import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">SARFUI</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar