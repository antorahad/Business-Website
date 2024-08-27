import ceo from '../../assets/CEO.jpg';

const HomeMember = () => {
    return (
        <div className="bg-slate-950 bg-opacity-15 px-5 py-10 flex flex-col items-center">
            <h1 className="text-4xl mb-10">Management Suite</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="relative group w-full h-full">
                    {/* Image */}
                    <img
                        src={ceo}
                        alt="CEO"
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 rounded-lg">
                        <h2 className="text-white text-lg font-semibold">John Doe</h2>
                        <p className="text-gray-300">Managing Director</p>
                    </div>
                </div>
                <div className="relative group w-full h-full">
                    {/* Image */}
                    <img
                        src={ceo}
                        alt="CEO"
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 rounded-lg">
                        <h2 className="text-white text-lg font-semibold">John Doe</h2>
                        <p className="text-gray-300">Managing Director</p>
                    </div>
                </div>
                <div className="relative group w-full h-full">
                    {/* Image */}
                    <img
                        src={ceo}
                        alt="CEO"
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 rounded-lg">
                        <h2 className="text-white text-lg font-semibold">John Doe</h2>
                        <p className="text-gray-300">Managing Director</p>
                    </div>
                </div>
                <div className="relative group w-full h-full">
                    {/* Image */}
                    <img
                        src={ceo}
                        alt="CEO"
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 rounded-lg">
                        <h2 className="text-white text-lg font-semibold">John Doe</h2>
                        <p className="text-gray-300">Managing Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMember;
