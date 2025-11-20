import React from 'react';
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Topheader = () => {
    return (
        <div className='bg-[#1F2C30] text-white hidden md:block'>
            <div className='flex items-center justify-between container mx-auto px-20 py-3'>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <CiPhone />
                        <p>017*******</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn />
                        <p>Mohakhali , Dhaka , Bangladesh</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiTimer />
                        <p>Mon-Sat: 8:00-5:00</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-3'>
                        <CiUser />
                        <p>Login / Register</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p>Follow Us</p>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTelegramPlane />
                        <CiTwitter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topheader;