import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Footer = () => {
    return (
        <section className='footer'>
            <h1>2021</h1>
            <Link to='/leaderboard'>Leaderoard</Link>
        </section>
    )
}