import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import CoursePage from '../courseComponants.jsx/CoursePage';
import Footer from '@/componants/Footer';

const page = async ({ params }) => {
    const { id } = await params;

    const res1 = await fetch(`http://localhost:3000/course.json${id}`);
    const courseDitails = await res1.json();

    return (
        <div className='bg-white text-black'>
            <CoursePage />
            
            {/* Main Container */}
            <div className='flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20 container mx-auto py-10 px-4 md:px-6 lg:px-20'>

                {/* Left Content */}
                <div className='border rounded-tr-xl rounded-tl-xl border-gray-400 px-4 md:px-8 py-6 lg:py-8 w-full lg:w-2/3'>
                    {/* Thumbnail */}
                    <img 
                        className='w-full h-auto rounded-xl object-cover mb-6' 
                        src={courseDitails.thumbnail} 
                        alt={courseDitails.title} 
                    />

                    {/* Level & Title */}
                    <div className='space-y-4'>
                        <p className='bg-[#07A698] inline-block px-4 py-1 text-center font-semibold text-white rounded-full'>{courseDitails.level}</p>
                        <h2 className='text-2xl md:text-3xl font-semibold'>{courseDitails.title}</h2>
                    </div>

                    {/* Info Row */}
                    <div className='flex flex-wrap gap-4 md:gap-6 items-center py-4'>
                        <div className='flex items-center gap-2 border-r pr-4'>
                            <img className='w-8 h-8 rounded-full' src="https://html.rrdevs.net/edcare/assets/img/service/course-details-author.png" alt="" />
                            <p>{courseDitails.instructorRole}: <span className='text-[#07A698] font-semibold'>{courseDitails.instructorName}</span></p>
                        </div>
                        <p>Web Development</p>
                        <p>April 20, 2025</p>
                        <div className='flex items-center gap-1 text-[#07A698]'>
                            <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                            <span>({courseDitails.rating})</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className='flex flex-wrap gap-2 md:gap-4 mb-4'>
                        <p className='py-2 px-4 bg-gray-300 rounded'>Overview</p>
                        <p className='py-2 px-4 bg-gray-300 rounded'>Overview</p>
                        <p className='py-2 px-4 bg-gray-300 rounded'>Overview</p>
                        <p className='py-2 px-4 bg-gray-300 rounded'>Overview</p>
                    </div>

                    {/* Description */}
                    <h3 className='text-xl md:text-2xl font-semibold py-2'>Description</h3>
                    <p className='text-sm md:text-base mb-4'>{courseDitails.description}</p>

                    <h4 className='text-xl md:text-2xl font-semibold py-2'>What Will You Learn?</h4>
                    <p className='text-sm md:text-base'>{courseDitails.learn}</p>
                </div>

                {/* Right Sidebar */}
                <div className='w-full lg:w-1/3 flex flex-col gap-6'>

                    {/* Price & CTA */}
                    <div className='border border-gray-400 rounded-md px-6 py-6'>
                        <h4 className='text-3xl md:text-4xl font-bold mb-4'>${courseDitails.price}</h4>
                        <div className='flex flex-col gap-4'>
                            <button className='w-full bg-[#07A698] text-white font-semibold px-4 py-2 rounded-md'>ADD TO CART</button>
                            <button className='w-full border px-4 py-2 border-gray-400 rounded-md font-semibold'>BUY NOW</button>
                        </div>
                    </div>

                    {/* Course Info */}
                    <div className='border border-gray-400 rounded-md px-6 py-6'>
                        <h3 className='text-xl md:text-2xl font-semibold mb-4'>Course Information</h3>
                        <ul className='space-y-2 text-sm md:text-base'>
                            <li>Instructor: <span className='text-[#07A698]'>{courseDitails.instructorName}</span></li>
                            <li>Lessons: <span className='text-[#07A698]'>{courseDitails.lessons}</span></li>
                            <li>Duration: <span className='text-[#07A698]'>{courseDitails.duration}</span></li>
                            <li>Level: <span className='text-[#07A698]'>{courseDitails.level}</span></li>
                            <li>Students: <span className='text-[#07A698]'>{courseDitails.students}</span></li>
                        </ul>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default page;
