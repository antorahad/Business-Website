import service from '../../assets/service.jpg';

const HomeService = () => {
    return (
        <>
            <div className="bg-white px-5 py-10 flex flex-col items-center">
                <h1 className="text-4xl mb-10">Our Services</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="card bg-base-100 shadow-xl rounded-lg transition-transform duration-300 delay-100 transform hover:scale-105">
                        <figure>
                            <img
                                src={service}
                                alt="Service" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Study Abroad Solutions</h2>
                            <p className='line-clamp-2 text-sm'>We are one of just a handful of student counseling firms in Bangladesh that specialize in helping</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-indigo-500 hover:bg-indigo-400 border-none hover:border-none outline-none hover:outline-none px-7 rounded-md text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl rounded-lg transition-transform duration-300 delay-100 transform hover:scale-105">
                        <figure>
                            <img
                                src={service}
                                alt="Service" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Study Abroad Solutions</h2>
                            <p className='line-clamp-2 text-sm'>We are one of just a handful of student counseling firms in Bangladesh that specialize in helping</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-indigo-500 hover:bg-indigo-400 border-none hover:border-none outline-none hover:outline-none px-7 rounded-md text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl rounded-lg transition-transform duration-300 delay-100 transform hover:scale-105">
                        <figure>
                            <img
                                src={service}
                                alt="Service" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Study Abroad Solutions</h2>
                            <p className='line-clamp-2 text-sm'>We are one of just a handful of student counseling firms in Bangladesh that specialize in helping</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-indigo-500 hover:bg-indigo-400 border-none hover:border-none outline-none hover:outline-none px-7 rounded-md text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl rounded-lg transition-transform duration-300 delay-100 transform hover:scale-105">
                        <figure>
                            <img
                                src={service}
                                alt="Service" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Study Abroad Solutions</h2>
                            <p className='line-clamp-2 text-sm'>We are one of just a handful of student counseling firms in Bangladesh that specialize in helping</p>
                            <div className="card-actions justify-start">
                                <button className="btn bg-indigo-500 hover:bg-indigo-400 border-none hover:border-none outline-none hover:outline-none px-7 rounded-md text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeService;
