import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">SARFUI</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/signin"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar