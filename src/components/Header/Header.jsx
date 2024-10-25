
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-screen-2xl mt-4 mx-auto">
                <div className="flex-1">
                    <img src="/src/assets/logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 align-middle">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>

                        <button className="btn border-1 border-gray-200">Coin <span><img src="/src/assets/dollar 1.png" alt="" /></span></button> 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;