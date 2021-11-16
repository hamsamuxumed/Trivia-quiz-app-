import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function RoomButton({userName, onClick }) {

    const getLocation = () => {
        if(userName.length >= 3){
            return '/lobby';
        }else{
            return '/';
        }
    }

    const getClass = () => {
        if(userName.length >= 3){
            return 'createRoom';
        }else{
            return 'enterDisabled';
        }
    }

    return (
        <>
            <NavLink className={getClass} to={getLocation} disabled={!(userName.length >= 3)} onClick={onClick}>Create your own room!</NavLink>
        </>
    )
}

