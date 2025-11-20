import React from 'react';

const CoursePage = () => {
    return (
        <div className='relative'>
            {/* Header Background */}
            <div className="bg-[url('https://html.rrdevs.net/edcare/assets/img/bg-img/page-header-bg.png')] bg-cover bg-center h-64 sm:h-72 md:h-80 lg:h-96 text-black relative">
                <div className='flex flex-col items-start justify-center h-full container mx-auto px-4 sm:px-8 md:px-20'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold bg-gray-200/40 px-4 sm:px-6 md:px-8 py-1 sm:py-2 rounded-xl'>
                        Course Page
                    </h2>
                    <p className='font-semibold mt-2 sm:mt-3'>
                        Home / <span className='text-[#39B8AD]'>Course Page</span>
                    </p>
                </div>

                {/* Decorative Images */}
                <img 
                    className='absolute top-14 sm:top-16 md:top-20 left-4 sm:left-6 md:left-8 w-12 sm:w-16 md:w-20' 
                    src="https://html.rrdevs.net/edcare/assets/img/shapes/page-header-shape-1.png" 
                    alt="shape-1" 
                />
                <img 
                    className='absolute bottom-0 left-4 sm:left-10 md:left-36 w-16 sm:w-20 md:w-28' 
                    src="https://html.rrdevs.net/edcare/assets/img/shapes/page-header-shape-2.png" 
                    alt="shape-2" 
                />
                <img 
                    className='absolute top-0 right-0 w-20 sm:w-24 md:w-32' 
                    src="https://html.rrdevs.net/edcare/assets/img/shapes/page-header-shape-3.png" 
                    alt="shape-3" 
                />
            </div>
        </div>
    );
};

export default CoursePage;
