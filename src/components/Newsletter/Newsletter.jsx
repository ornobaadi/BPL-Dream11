const Newsletter = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl p-16 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <h2 className="text-2xl font-bold text-center mb-2">Subscribe to our Newsletter</h2>
            <p className="text-center text-gray-500 mb-4">Get the latest updates and news right in your inbox!</p>
            <div className="flex flex-col lg:flex-row gap-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                />
                <button className="bg-gradient-to-r from-pink-400 to-yellow-300 text-black font-bold py-2 px-4 rounded-lg">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
