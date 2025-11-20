import SectionCategores from '@/componants/HeaderComponants/SectionCategores';
import React from 'react';

const CoursePlan = ({ courseCategores, handleId }) => {
    return (
        <div className="py-10">

            {/* Section Heading */}
            <SectionCategores
                title={"Top class course"}
                name={"Explore Featured Courses"}
            />

            {/* Categories Buttons */}
            <div
                className="
                    container mx-auto
                    flex flex-wrap sm:flex-nowrap 
                    justify-center items-center gap-3 sm:gap-4
                    px-4 sm:px-0
                "
            >
                {courseCategores.map(c => (
                    <div key={c.id} className="py-2 sm:py-4">
                        <h2
                            onClick={() => handleId(c.id)}
                            className="
                                text-sm sm:text-base font-semibold
                                border border-gray-400 
                                px-6 py-2 sm:px-8 sm:py-2 
                                rounded-full bg-white
                                cursor-pointer 
                                hover:bg-[#07A698] hover:text-white 
                                transition-all duration-300
                                whitespace-nowrap
                                shadow-sm
                            "
                        >
                            {c.name}
                        </h2>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CoursePlan;
