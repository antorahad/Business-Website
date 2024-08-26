import { useEffect, useState } from 'react';
import slideimage from '../../assets/slide-1.jpg';
import slideimage2 from '../../assets/slide-2.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slideimage, slideimage2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    return (
        <>
            <div className="carousel w-full h-[500px] relative overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img src={slide} className="w-full h-full" alt={`Slide ${index + 1}`} />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <button
                                className="btn btn-square bg-indigo-500 border-none outline-none text-white hover:bg-indigo-400 hover:border-none hover:outline-none"
                                onClick={() => setCurrentSlide((index - 1 + slides.length) % slides.length)}
                            >
                                ❮
                            </button>
                            <button
                                className="btn btn-square bg-indigo-500 border-none outline-none text-white hover:bg-indigo-400 hover:border-none hover:outline-none"
                                onClick={() => setCurrentSlide((index + 1) % slides.length)}
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Banner;
