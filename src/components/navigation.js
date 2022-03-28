import React from 'react';
import { NavLink } from 'react-router-dom';

function NewNav(){
    return(
        <div className="newnav">
            <nav>
                <NavLink to="/">Home</NavLink>
                <a href="https://github.com/ChristianHopf">GitHub</a>
                <a href="https://linkedin.com/in/christian-hopf-codes">LinkedIn</a>
                <NavLink to="/books">Book Reviews</NavLink>
            </nav>
        </div>
    );
}

export default NewNav;