import React from 'react';
import './Header.css';
import HeaderBanner from '../assets/images/Preaching Poetry Banner.png';

function Header() {
    return (
        
            <header className="container col-12 flex justify-content-center" id="header">
                <img alt="header banner" src={HeaderBanner} class="Banner col-12"></img>
            </header>
    
 )}       
export default Header;