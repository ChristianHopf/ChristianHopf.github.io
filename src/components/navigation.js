import React from 'react';

function Navigation(){
    return(
        <div className="navbar navigation justify-content-end">
            <ul className="nav justify-content-end">
            <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/ChristianHopf">GitHub</a>
                </li>
                <li className="nav-item">
                    <a href="https://linkedin.com/in/christian-hopf-codes">LinkedIn</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;