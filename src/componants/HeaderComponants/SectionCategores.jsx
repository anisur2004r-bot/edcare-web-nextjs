import React from 'react';
import { IoArrowRedoSharp } from "react-icons/io5";

const SectionCategores = ({ title, name }) => {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="flex flex-col items-center justify-center py-10 gap-4">
                <div className="flex items-center gap-2 justify-center border bg-white text-center py-2 px-4 sm:px-6 rounded-full text-gray-700 border-gray-400">
                    <div className="border border-gray-400 p-1 rounded-full bg-[#DAF2F0] text-[#07A698]">
                        <IoArrowRedoSharp />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">{title}</p>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">{name}</h1>
            </div>
        </div>
    );
};

export default SectionCategores;
