import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="max-w-screen-2xl  mx-auto">
            <div>
                <h1 className="text-2xl font-semibold">Available Players</h1>
            </div>
            <div className="player-container my-10 ">
                {
                    players.map(player => <Player key={player.id}
                        player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;