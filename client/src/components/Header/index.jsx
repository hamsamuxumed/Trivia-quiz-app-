import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <nav>
            <h1 ><Link id='navTitle' exact to='/'>Quiz your mind</Link></h1>
        </nav>
    )
}