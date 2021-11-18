import React from "react";
import './style.css';

export const RoomLeaderboard = ({ name, score }) => {
    return (
        <div id="roomresults">
            <h4>Game Results</h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </table>
        </div>
    )
}