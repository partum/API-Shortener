import React from 'react';
import Logo from '../assets/logo.svg';
import Button from './button.js';

export default function Nav() {
    return (
        <nav>
            <div>
                <img src={Logo} alt="Shortly"/>
                <a href="github.com/partum">Features</a>
                <a href="github.com/partum">Pricing</a> 
                <a href="github.com/partum">Resources</a>
            </div>
            <div>
            <a href="github.com/partum">Log In</a>
            <Button text="Sign Up"/>
            </div>
        </nav>
    )
}


