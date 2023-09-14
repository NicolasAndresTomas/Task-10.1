import React from "react";
import {Outlet, Link} from "react-router-dom"
import '../styles/NavigationBar.css'
import logo from '../images/logo.png'

function NavigationBar()
{
    return <div>
    <div className="navbar">
        <div className="navbar-left-container">
            <img src={logo} alt="Logo" />
            <div className="navbar-left-contents">
                <Link classname='link' to='/'>Home</Link>
                <Link classname='link' to='/login'>Login</Link>
                <Link classname='link' to='/signup'>Create Account</Link>
                <Link classname='link' to='/profile'>User</Link>
            </div>
        </div>
    </div>
    <Outlet />
    </div>
}
export default NavigationBar