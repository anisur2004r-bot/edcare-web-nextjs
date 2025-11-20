import React from 'react';
import { IoArrowRedoSharp } from "react-icons/io5";

const ShortJurney = () => {
    return (
        <div className="py-14">
            <div
                className="
                    container mx-auto 
                    flex flex-col lg:flex-row 
                    items-start lg:items-center 
                    gap-10 lg:gap-12 
                    px-4 sm:px-6 md:px-12 lg:px-24
                "
            >
                {/* Left Image */}
                <div className="flex-1">
                    <img
                        className="rounded-tl-3xl w-full object-cover"
                        src="https://html.rrdevs.net/edcare/assets/img/images/content-img-1.png"
                        alt=""
                    />
                </div>

                {/* Middle Images */}
                <div className="flex flex-col gap-6 flex-1">
                    <img
                        className="rounded-tr-3xl rounded-bl-3xl w-full object-cover"
                        src="https://html.rrdevs.net/edcare/assets/img/images/content-img-2.png"
                        alt=""
                    />
                    <img
                        className="rounded-tl-3xl rounded-br-3xl w-full object-cover"
                        src="https://html.rrdevs.net/edcare/assets/img/images/content-img-3.png"
                        alt=""
                    />
                </div>

                {/* Right Text Section */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Badge */}
                    <div className="flex items-center gap-2 border border-gray-400 rounded-full w-fit px-3 py-1">
                        <div className="border border-gray-400 p-1 rounded-full bg-[#DAF2F0] text-[#07A698]">
                            <IoArrowRedoSharp />
                        </div>
                        <p className="text-sm sm:text-base">How We Start Jurney</p>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
                        We Care About Your Life For <br /> Better Feture
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        This includes offering personalized feedback, fostering a sense of community
                        through discussion forums and group projects, and providing continuous
                        support to address challenges and improve.
                    </p>

                    {/* Cards */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 border px-3 py-4 border-gray-400 rounded-xl hover:shadow-xl transition">
                            <img
                                className="border px-4 py-3 rounded-full border-gray-300 bg-[#F0FCFF] w-14 h-14"
                                src="https://html.rrdevs.net/edcare/assets/img/icon/content-1.png"
                                alt=""
                            />
                            <div className="space-y-1">
                                <h3 className="text-lg sm:text-xl font-semibold">Master Certified Trainer</h3>
                                <p className="text-sm sm:text-base text-gray-700 leading-snug">
                                    This includes offering personalized feedback, fostering a sense of community
                                    through discussion.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 border px-3 py-4 border-gray-400 rounded-xl hover:shadow-xl transition">
                            <img
                                className="border px-4 py-3 rounded-full border-gray-300 bg-[#F0FCFF] w-14 h-14"
                                src="https://html.rrdevs.net/edcare/assets/img/icon/content-2.png"
                                alt=""
                            />
                            <div className="space-y-1">
                                <h3 className="text-lg sm:text-xl font-semibold">Coach Certification Program</h3>
                                <p className="text-sm sm:text-base text-gray-700 leading-snug">
                                    This includes offering personalized feedback, fostering a sense of community
                                    through discussion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortJurney;
