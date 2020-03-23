import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <div className='nav'>
            <div className="navBarLeft">
            <NavLink to="/">Alex</NavLink>
            </div>
            <div className="navBarRight">
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            </div>
        </div>
    )
}
export default Nav;