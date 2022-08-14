import React from 'react';
import './Header.css';
import HeaderBanner from '../assets/images/Preaching Poetry Banner.png';

function Header() {
    return (
        
            <header className="container col-12 justify-content-center" id="header">
                <img alt="header banner" src={HeaderBanner} class="Banner"></img>
            </header>
    
 )}       
export default Header;

//use project.js syntax to adjust the header for each page that is clicked on???