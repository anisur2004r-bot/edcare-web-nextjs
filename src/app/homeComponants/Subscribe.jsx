import React from 'react';
import { IoArrowRedoSharp } from "react-icons/io5";

const Subscribe = () => {
    return (
        <div className="py-14">
            <div
                className="
                    bg-[url('https://html.rrdevs.net/edcare/assets/img/bg-img/footer-bg.png')] 
                    bg-cover bg-center
                    rounded-2xl
                    px-4 sm:px-6 md:px-12 lg:px-24
                "
            >
                <div
                    className="
                        container mx-auto
                        flex flex-col lg:flex-row
                        items-center lg:items-start
                        gap-8 lg:gap-16
                        text-white
                        py-12
                    "
                >
                    {/* Left Image */}
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                        <img
                            className="w-full h-auto object-contain"
                            src="https://html.rrdevs.net/edcare/assets/img/images/request-img-1.png"
                            alt=""
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 flex flex-col gap-6 lg:gap-8 items-start">
                        {/* Badge */}
                        <div className="flex items-center gap-2 border rounded-full px-3 py-1 bg-white text-black w-fit">
                            <div className="border border-gray-400 p-1 rounded-full bg-[#DAF2F0] text-[#07A698]">
                                <IoArrowRedoSharp />
                            </div>
                            <p className="text-sm sm:text-base">Subscribe Newsletter</p>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-white">
                            Find Your Best Course With Us
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Quality technologies via fully tested methods of empowerment. Proactively disseminate
                            web enabled best practices after cross functional expertise.
                        </p>

                        {/* Input Fields */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <input
                                className="border px-4 py-3 rounded-full border-gray-400 w-full sm:w-auto flex-1"
                                type="text"
                                placeholder="Course Name"
                            />
                            <input
                                className="border px-4 py-3 rounded-full border-gray-400 w-full sm:w-auto flex-1"
                                type="email"
                                placeholder="Email Address"
                            />
                        </div>

                        {/* Subscribe Button */}
                        <button className="bg-[#07A698] px-8 py-3 rounded-full font-semibold mt-2 sm:mt-0">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
