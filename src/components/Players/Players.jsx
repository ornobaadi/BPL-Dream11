import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div>
            {/* <h1 className="text-2xl">Players: {players.length}</h1> */}
            <div className="player-container max-w-screen-2xl mt-4 mx-auto">
            {
                players.map(player => <Player key={player.id} 
                player={player}></Player>)
            }
            </div>
        </div>
    );
};

export default Players;