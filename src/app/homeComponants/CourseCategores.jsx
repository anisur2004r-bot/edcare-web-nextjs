

import SectionCategores from '@/componants/HeaderComponants/SectionCategores';
import React from 'react';

const CourseCategores = async () => {
    const res = await fetch("http://localhost:3000/categores.json");
    const categores = await res.json();

    return (
        <div className="bg-[#F2F4F7] text-black py-10">

            {/* Section Header */}
            <SectionCategores
                title={"Our Course Categories"}
                name={"Select The Industry Where You Want To Learn"}
            />

            {/* Categories */}
            <div
                className="
                    container mx-auto
                    px-6 md:px-16 lg:px-44
                    py-10 
                    grid 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                    gap-6"
            >
                {categores.map(c => (
                    <div key={c.id} className="flex justify-center">
                        <div
                            className="
                                flex items-center gap-2
                                border border-gray-400
                                bg-white shadow-xl
                                px-5 py-3
                                rounded-full
                                w-full sm:w-auto
                                justify-center cursor-pointer
                                hover:shadow-2xl transition
                            "
                        >
                            <img
                                className="
                                    border border-gray-400 
                                    p-1 
                                    rounded-full 
                                    w-10 h-10 object-contain
                                "
                                src={c.icon}
                                alt=""
                            />
                            <h1 className="text-sm sm:text-base font-medium">
                                {c.title}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseCategores;
