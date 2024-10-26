import PropTypes from 'prop-types';
import { FaFlag } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import './Player.css';

const Player = ({ player, onSelect }) => {
    const { name, image, country, role, battingStyle, rating, price } = player;

    return (
        <div className='border border-gray-300 p-5 rounded-xl'>
            <img className='rounded-xl mb-3 object-cover w-[100%] h-[50%]' src={image} alt="" />
            <div className='flex gap-3'>
                <p className='text-3xl'><IoMdPerson /></p>
                <h2 className="text-2xl font-semibold mb-6">{name}</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <p className='text-gray-600'><FaFlag /></p>
                    <p>{country}</p>
                </div>
                <div>
                    <p className='mb-3'>{role}</p>
                </div>
            </div>
            <hr />
            <div className='my-5 flex justify-between'>
                <p className='font-bold'>Rating: </p>
                <p>{rating}</p>
            </div>
            <div className='my-3 flex justify-between'>
                <p className='font-bold'>{battingStyle}</p>
                <p>{battingStyle}</p>
            </div>
            <div className='my-3 flex justify-between items-center'>
                <p className='font-bold'>Price: ${price}</p>
                <button onClick={() => onSelect(player)} className='btn btn-outline hover:btn-neutral'>Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Player;