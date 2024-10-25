import PropTypes from 'prop-types';

const Header = ({ coins }) => {
    return (
        <div className="sticky top-0 z-50 ">
            <div className="navbar bg-base-100 max-w-screen-2xl mt-4 mx-auto">
                <div className="flex-1">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-5 px-1 align-middle">
                        <li className='text-lg'><a>Home</a></li>
                        <li className='text-lg'><a>Fixture</a></li>
                        <li className='text-lg'><a>Teams</a></li>
                        <li className='text-lg'><a>Schedules</a></li>

                        <button className="btn border-1 text-lg border-gray-200">{coins} Coin <span><img src="/assets/dollar 1.png" alt="" /></span></button> 
                    </ul>
                </div>
            </div>
            
        </div>
    ); 
};

Header.propTypes = {
    coins: PropTypes.number.isRequired,
    handleToAddCoin: PropTypes.func.isRequired,
};

export default Header;