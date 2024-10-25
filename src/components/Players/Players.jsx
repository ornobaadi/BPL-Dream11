import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css'
import { toast } from 'react-hot-toast';

const Players = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handlePlayerSelect = (player) => {
        const { price } = player;

        if (selectedPlayers.has(player.id)) {
            toast.error(`${player.name} has already been selected!`);
            return;
        }

        if (coins < price) {
            toast.error("Not enough credit. Please add some credit");
            return;
        }

        setCoins(coins - price);
        setSelectedPlayers(prev => new Set(prev).add(player.id));
        toast.success(`${player.name} has been chosen!`);
    };

    return (
        <div className="max-w-screen-2xl  mx-auto">
            <div>
                <h1 className="text-2xl font-semibold my-10">Available Players</h1>
            </div>
            <div className="player-container my-10 ">
                {
                    players.map(player => (
                        <Player
                            key={player.id}
                            player={player}
                            onSelect={handlePlayerSelect}
                        />
                    ))
                }
            </div>
        </div>
    );
};


export default Players;