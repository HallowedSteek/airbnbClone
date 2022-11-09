import React from 'react';
import Air from "../images/airbnb.png";

export default function Nav(){
    return(
        <nav className='navbar'>
            <img className='logo' src={Air} alt='airbnb-logo'></img>
        </nav>
    )
};