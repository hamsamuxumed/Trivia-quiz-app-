import React, { useEffect } from 'react'
import { CreateForm } from '../../components/CreateForm';
import './style.css'

export function Lobby({ roomNum }) {
    return (
        <div>
            <CreateForm />
            <h3 className='roomCode'>Room code: {roomNum}</h3>
        </div>
    )
}
