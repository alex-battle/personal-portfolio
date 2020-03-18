import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <div className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
        </div>
    )
}
export default Nav;