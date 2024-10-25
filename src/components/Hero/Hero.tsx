import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
                className="mx-auto mt-10 hero max-w-screen-2xl min-h-[600px] bg-black rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url('/assets/bg-shadow.png')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-6xl">
                        <img className='mx-auto mb-10' src="/assets/banner-main.png" alt="" />
                        <h1 className="mb-10 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-10 text-2xl">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn btn-lg btn-warning text-xl">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;