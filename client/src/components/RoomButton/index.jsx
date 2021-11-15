import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export function RoomButton() {
    return (
        <>
            <NavLink to='pagexyz'>Create your own room!</NavLink>
        </>
    )
}

