import React from 'react';
import { Socket } from '../../components';
import './style.css';

export const Home = () => {
    return (
        <>
        <div className="formGrid" role='document'>
            <Socket />
        </div>
        </>
    )
}