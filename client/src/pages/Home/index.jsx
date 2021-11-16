import React from 'react';
import { Socket } from '../../components';
// import CreateForm from '../../components/CreateForm';
import './style.css';

export const Home = () => {
    return (
        <>
        <div className="formGrid">
            <Socket />
        </div>
        </>
    )
}