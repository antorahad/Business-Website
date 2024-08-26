import ceo from "../../assets/CEO.jpg";
const HomeAbout = () => {
    return (
        <>
            <div className=" bg-white max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 px-5 py-10">
                <div className="flex flex-col items-center lg:items-start gap-3">
                    <h1 className="text-4xl capitalize max-w-lg leading-relaxed text-center lg:text-start">Welcome to daikonia german edcation center!</h1>
                    <p className="max-w-lg leading-relaxed">In today’s hyper-competitive admissions landscape, standing out from the crowd is more important and more difficult than ever. Different universities are setting various criteria in their admission process which creates a complex environment for students to select right institute of their choice.</p>
                    <div>
                        <button className="btn bg-indigo-500 hover:bg-indigo-400 border-none hover:border-none outline-none hover:outline-none px-7 rounded-md text-white">View Details</button>
                    </div>
                </div>
                <div>
                    <img src={ceo} alt="logo" className="w-full h-full md:w-2/3 md:h-2/3 lg:w-[400px] lg:h-[400px] mx-auto rounded-lg" />
                    <p className="text-sm text-center text-gray-500 mt-3">John Doe, Managing Director, Diakonia GEC.</p>
                </div>
            </div>
        </>
    );
};

export default HomeAbout;