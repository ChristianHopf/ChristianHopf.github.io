import React from 'react';
import { NavLink } from 'react-router-dom';

function NewNav(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <a href="https://github.com/ChristianHopf">GitHub</a>
            <a href="https://linkedin.com/in/christian-hopf-codes">LinkedIn</a>
            <NavLink to="/books">Book Reviews</NavLink>
        </nav>
    );
}

export default NewNav;