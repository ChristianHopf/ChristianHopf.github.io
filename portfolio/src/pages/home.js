import React from 'react';
import '../App.css';
import Navigation from '../components/navigation';
import Introduction from '../components/introduction';

function Home(){
    return(
        <div>
            <Navigation />
            <Introduction />
        </div>
    );
}

export default Home;