import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const Hero = ({ handleToAddCoin }) => {
    const handleClaimCredit = () => {
        handleToAddCoin();
        toast.success("Credit added to account");
    };

    return (
        <div>
            <div
                className="mx-auto mt-5 hero max-w-screen-2xl min-h-[600px] bg-black rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url('/assets/bg-shadow.png')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-6xl p-4">
                        <img
                            className="mx-auto mb-10 w-28 lg:w-52 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
                            src="/assets/banner-main.png"
                            alt="Banner"
                        />
                        <h1 className="mb-10 text-3xl sm:text-2xl md:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-10 text-lg sm:text-xl md:text-2xl">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button
                            onClick={handleClaimCredit}
                            className="btn btn-lg btn-warning text-lg sm:text-xl"
                        >
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    handleToAddCoin: PropTypes.func.isRequired,
};

export default Hero;
