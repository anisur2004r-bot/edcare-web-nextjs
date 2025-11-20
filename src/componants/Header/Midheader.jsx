import React from 'react';
import { CiSearch } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";

const Midheader = () => {
    return (
        <div className='bg-white text-black font-semibold'>
            <div className='flex flex-col md:flex-row items-center justify-between container mx-auto px-4 sm:px-6 md:px-12 py-4 gap-4 md:gap-0'>
                
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <img src="https://html.rrdevs.net/edcare/assets/img/logo/logo-1.png" alt="Logo" className='w-32 sm:w-40 md:w-auto'/>
                </div>

                {/* Search bar */}
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-[#F2F4F7] text-black px-4 md:px-8 py-3 rounded-full w-full md:w-auto'>
                    <p className='flex items-center gap-1'>
                        Categorys
                        <select className='outline-none bg-transparent' name="" id="">
                            <option>All</option>
                            <option>Design</option>
                            <option>Marketing</option>
                        </select>
                    </p>
                    <input className='outline-none px-2 py-1 rounded-full flex-1 md:flex-none w-full md:w-auto' type="text" placeholder='Search here...' />
                    <div className='flex items-center gap-1 bg-[#39B8AD] px-4 py-1 rounded-full text-white cursor-pointer'>
                        <CiSearch />
                        <p>Search</p>
                    </div>
                </div>

                {/* Icons & CTA */}
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='border p-2 rounded-full cursor-pointer'>
                        <GiSelfLove />
                    </div>
                    <div className='border p-2 rounded-full cursor-pointer'>
                        <IoCartOutline />
                    </div>
                    <div className='bg-[#39B8AD] px-4 md:px-8 py-2 rounded-full text-white cursor-pointer text-sm md:text-base'>
                        Start Free Trial
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Midheader;
