import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

const About = () => {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto 
                px-6 md:px-16 lg:px-24 
                py-12 md:py-16 lg:py-20 
                flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Image Section */}
                <div className="flex flex-col sm:flex-row lg:flex items-end gap-6">
                    
                    {/* Left Column Images */}
                    <div className="flex flex-col gap-4">
                        <img
                            className="rounded-tr-4xl rounded-bl-4xl w-64 sm:w-72 md:w-80"
                            src="https://html.rrdevs.net/edcare/assets/img/images/about-img-1.jpg"
                            alt=""
                        />

                        {/* Support Box */}
                        <div className="flex items-center px-6 sm:px-8 py-5 sm:py-7 gap-3 bg-[#07A698] text-white rounded-tr-4xl rounded-bl-4xl">
                            <div className="border border-gray-200 p-3 rounded-full">
                                <FaPhoneVolume size={20} />
                            </div>
                            <div>
                                <p className="text-sm sm:text-base">ONLINE SUPPORT</p>
                                <p className="text-lg sm:text-xl font-bold">+01914106079</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            className="rounded-tl-4xl rounded-br-4xl border w-64 sm:w-72 md:w-180 "
                            src="https://html.rrdevs.net/edcare/assets/img/images/about-img-2.jpg"
                            alt=""
                        />
                    </div>
                </div>

                {/* Right Text Section */}
                <div className="flex flex-col gap-6 md:gap-8 items-start text-center lg:text-left">

                    <p className="bg-white px-6 py-1 rounded-full border border-gray-300 mx-auto lg:mx-0">
                        Get More About Us
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                        Over 10 Years in Distant learning <br /> for Skill Development
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        Compellingly procrastinate equity invested markets with efficient process
                        improvements. actualize mission-critical partnerships with integrated
                        portals. Authoritatively optimize low-risk high-yield metrics and
                        plug-and-play potentialities.
                    </p>

                    {/* Stats Section */}
                    <div className="grid sm:grid-cols-2 gap-8">

                        <div className="flex items-center gap-4">
                            <img
                                className="border p-4 border-gray-400 shadow-xl rounded-full w-16 h-16"
                                src="https://html.rrdevs.net/edcare/assets/img/icon/about-1.png"
                                alt=""
                            />
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#07A698]">9.5+</h3>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    Total active students taking <br /> gifted course
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <img
                                className="border p-4 border-gray-400 shadow-xl rounded-full w-16 h-16"
                                src="https://html.rrdevs.net/edcare/assets/img/icon/about-2.png"
                                alt=""
                            />
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#07A698]">6.7+</h3>
                                <p className="text-gray-700 text-sm sm:text-base">
                                    Total active students taking gifted <br /> course
                                </p>
                            </div>
                        </div>

                    </div>

                    <button className="bg-[#07A698] px-10 py-2 text-white rounded-full font-semibold mx-auto lg:mx-0">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
