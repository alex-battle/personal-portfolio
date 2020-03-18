import React from 'react';
import {Route} from 'react-router-dom'
import Nav from './Nav'
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Home from './Home';

function Main(){
    return(
        <div>
            <div className='navBar'>
            <Nav />
            </div>
            <div>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/about'><About/></Route>
                <Route exact path='/projects'><Projects/></Route>
                <Route exact path='/contact'><Contact/></Route>
            </div>

        </div>
    )
}
export default Main;