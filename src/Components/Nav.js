import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <div className='nav'>
            <div className="navBarLeft">
            <a href="/">Alex</a>
            </div>
            <div className="navBarRight">
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
            </div>
        </div>
    )
}
export default Nav;