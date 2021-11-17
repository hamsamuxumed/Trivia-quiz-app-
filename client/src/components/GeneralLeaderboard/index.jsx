import React, { useEffect } from "react";
import './style.css';

export const GeneralLeaderboard = () => {

useEffect(() => {
        const fetchUsers = async () => {
            let findUsers = await fetch('http://localhost:3000/leaderboard/users');
            let userJson = await findUsers.json();
            let leaderboard = document.getElementById('leaderboard');
            let sortUsers = userJson.sort(function(b, a) {
                return a.score - b.score;
            });
            console.log(sortUsers)
            sortUsers.forEach(u => {
                let tableRow = document.createElement('tr');
                let nametd = document.createElement('td');
                let scoretd = document.createElement('td');
                nametd.textContent = u.username;
                scoretd.textContent = u.score;
                tableRow.appendChild(nametd);
                tableRow.appendChild(scoretd);
                leaderboard.appendChild(tableRow);
            });
        }
        fetchUsers();
    },[])
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody id='leaderboard'>
                </tbody>
            </table>
        </div>
    )
}