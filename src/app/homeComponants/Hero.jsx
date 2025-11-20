import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[#E2EDF4] text-black">
            <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between container mx-auto 
                    px-6 md:px-16 lg:px-24 py-10 md:py-16 lg:py-20 gap-10 md:gap-0">

                    {/* Left side */}
                    <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
                        <p className="bg-white w-fit mx-auto md:mx-0 px-6 py-1 rounded-full border border-gray-300">
                            Welcome to Online Education
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-snug">
                            Start learning from <br />
                            the world’s <span className="text-[#07A698]">best institutions</span>
                        </h2>

                        <div>
                            <button className="bg-[#07A698] px-10 py-2 text-white rounded-full font-semibold">
                                Get Started
                            </button>
                        </div>

                        {/* Enrolment */}
                        <div className="flex flex-col sm:flex-row items-center sm:gap-5 gap-3 justify-center md:justify-start">
                            <div className="flex items-center -space-x-3">
                                <img className="w-10 h-10" src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-1.png" alt="" />
                                <img className="w-10 h-10" src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-2.png" alt="" />
                                <img className="w-10 h-10" src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-3.png" alt="" />
                                <img className="w-10 h-10" src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-4.png" alt="" />
                            </div>
                            <p><span className="text-[#07A698]">10k</span> Enrolment</p>
                        </div>

                        <p className="text-lg md:text-xl font-semibold text-gray-800">
                            Explore <span className="text-[#07A698]">1350+</span> Course within subject
                        </p>
                    </div>

                    {/* Right image */}
                    <div>
                        <img
                            className="rounded-4xl w-72 sm:w-96 md:w-[430px]"
                            src="https://html.rrdevs.net/edcare/assets/img/images/hero-img-1.png"
                            alt=""
                        />
                    </div>
                </div>

                {/* Shapes */}
                <img
                    className="absolute bottom-10 left-5 sm:left-10 w-12 sm:w-16 animate-bounce"
                    src="https://html.rrdevs.net/edcare/assets/img/shapes/hero-shape-2.png"
                    alt=""
                />

                <img
                    className="absolute top-10 right-5 sm:right-20 w-14 sm:w-20"
                    src="https://html.rrdevs.net/edcare/assets/img/shapes/hero-shape-1.png"
                    alt=""
                />

                {/* Course box */}
                <div className="absolute bottom-10 right-5 sm:right-32 bg-white w-36 sm:w-48 text-center py-3 sm:py-4 rounded-xl shadow-lg">
                    <h2 className="text-[#07A698] text-3xl sm:text-5xl font-bold">256+</h2>
                    <p className="font-semibold text-sm sm:text-base">Crashed Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
