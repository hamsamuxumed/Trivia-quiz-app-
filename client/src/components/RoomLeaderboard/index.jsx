import React from "react";
import './style.css';

export const RoomLeaderboard = ({ name, score }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </table>
        </div>
    )
}