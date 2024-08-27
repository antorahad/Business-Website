import Marquee from "react-fast-marquee";
const HomeTestimonial = () => {
    return (
        <>
            <div className="bg-slate-950 bg-opacity-15 px-5 py-10 flex flex-col items-center">
                <h1 className="text-4xl mb-10">Success Stories</h1>
                <Marquee pauseOnClick={true} pauseOnHover={true} direction="right" speed={100}>
                    <div className="card bg-base-200 w-1/2 md:w-3/4 lg:w-4/5 mx-auto rounded-lg shadow-sm">
                        <div className="card-body flex flex-col items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring-indigo-500 ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h2 className="card-title text-indigo-500">John Doe</h2>
                            <p className="text-sm">Germany</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-center text-sm">"Thanks to Diakonia GEC for showing me the right for me. Now I'm purusing My MBA in Germany"</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 w-1/2 md:w-3/4 lg:w-4/5 mx-auto rounded-lg shadow-sm">
                        <div className="card-body flex flex-col items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring-indigo-500 ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h2 className="card-title text-indigo-500">John Doe</h2>
                            <p className="text-sm">Germany</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-center text-sm">"Thanks to Diakonia GEC for showing me the right for me. Now I'm purusing My MBA in Germany"</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 w-1/2 md:w-3/4 lg:w-4/5 mx-auto rounded-lg shadow-sm">
                        <div className="card-body flex flex-col items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring-indigo-500 ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h2 className="card-title text-indigo-500">John Doe</h2>
                            <p className="text-sm">Germany</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-center text-sm">"Thanks to Diakonia GEC for showing me the right for me. Now I'm purusing My MBA in Germany"</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 w-1/2 md:w-3/4 lg:w-4/5 mx-auto rounded-lg shadow-sm">
                        <div className="card-body flex flex-col items-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring-indigo-500 ring-offset-base-100 ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h2 className="card-title text-indigo-500">John Doe</h2>
                            <p className="text-sm">Germany</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-7"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-center text-sm">"Thanks to Diakonia GEC for showing me the right for me. Now I'm purusing My MBA in Germany"</p>
                        </div>
                    </div>
                </Marquee>
            </div>
        </>
    );
};

export default HomeTestimonial;