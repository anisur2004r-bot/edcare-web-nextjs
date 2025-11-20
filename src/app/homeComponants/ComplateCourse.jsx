import React from 'react';

const ComplateCourse = () => {
    return (
        <div className="bg-[#07A698] text-white py-14">
            <div
                className="
                    container mx-auto 
                    px-4 sm:px-8 md:px-12 lg:px-24 
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4 
                    gap-10
                    text-center
                "
            >
                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-semibold">3,192+</h2>
                    <p className="text-lg sm:text-xl font-semibold">Successflly Trained</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-semibold">15,485+</h2>
                    <p className="text-lg sm:text-xl font-semibold">Class Completed</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-semibold">97.55%</h2>
                    <p className="text-lg sm:text-xl font-semibold">Satisfaction Rate</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-semibold">97.55%</h2>
                    <p className="text-lg sm:text-xl font-semibold">Satisfaction Rate</p>
                </div>
            </div>
        </div>
    );
};

export default ComplateCourse;
