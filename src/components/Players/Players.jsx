import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css';
import { toast } from 'react-hot-toast';
import { CgRemove } from "react-icons/cg";
import PropTypes from 'prop-types';

const Players = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState(new Set());
    const [view, setView] = useState("available");

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(setPlayers)
            .catch(error => console.error("Error loading players:", error));
    }, []);

    const handlePlayerSelect = (player) => {
        const { id, name, price } = player;

        if (selectedPlayers.has(id)) {
            toast.error(`${name} has already been selected!`);
            return;
        }
        if (selectedPlayers.size >= 6) {
            toast.error("You can only select up to 6 players.");
            return;
        }
        if (coins < price) {
            toast.error("Not enough credit. Please add some credit.");
            return;
        }

        setCoins(prevCoins => prevCoins - price);
        setSelectedPlayers(prevSelected => new Set(prevSelected).add(id));
        toast.success(`${name} has been chosen!`);
    };

    const handlePlayerRemove = (player) => {
        const { id, name, price } = player;

        setSelectedPlayers(prevSelected => {
            const updatedSet = new Set(prevSelected);
            updatedSet.delete(id);
            return updatedSet;
        });
        setCoins(prevCoins => prevCoins + price);
        toast.success(`${name} has been removed from your team.`);
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center my-10">
                <h1 className="text-2xl font-semibold">Available Players</h1>
                <div className="flex gap-2">
                    <button
                        onClick={() => setView("available")}
                        className={`btn ${view === "available" ? "btn-success text-white" : "btn-outline"}`}>
                        Available
                    </button>
                    <button
                        onClick={() => setView("selected")}
                        className={`btn ${view === "selected" ? "btn-success text-white" : "btn-outline"}`}>
                        Selected ({selectedPlayers.size})
                    </button>
                </div>
            </div>

            <div className={`my-20 ${view === "available" ? "player-container" : ""}`}>
                {view === "available" ? (
                    players.map(player => (
                        <Player
                            key={player.id}
                            player={player}
                            onSelect={handlePlayerSelect}
                            isSelected={selectedPlayers.has(player.id)}
                        />
                    ))
                ) : (
                    <>
                        {Array.from(selectedPlayers).map(playerId => {
                            const player = players.find(p => p.id === playerId);
                            return player && (
                                <div key={player.id} className="selected-player bg-gray-100 rounded-lg flex justify-between items-center p-4 mb-5 border border-gray-300">
                                    <div className="flex items-center gap-5">
                                        <img className="h-32 w-32 object-cover rounded-lg" src={player.image} alt={player.name} />
                                        <div>
                                            <p className="font-semibold">{player.name}</p>
                                            <p>{player.role}</p>
                                            <p>Price: ${player.price}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handlePlayerRemove(player)}
                                        className="btn btn-outline btn-sm">
                                        <CgRemove /> Remove
                                    </button>
                                </div>
                            );
                        })}
                        <button
                            onClick={() => setView("available")}
                            className="btn btn-success text-white mt-4">
                            Add More Players
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

Players.propTypes = {
    coins: PropTypes.number.isRequired,
    setCoins: PropTypes.func.isRequired
};

export default Players;
