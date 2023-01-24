import React from 'react';
import logo from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'> 
           <div>
           <img src={logo} alt="" />
           </div>
           <div>
           <h1>Get Your Favorite Anime</h1>
           <p>At Minimum Cost | Tax Free | Legal</p>
           </div>
           <div>

           </div>
        </div>
    );
};

export default Header;