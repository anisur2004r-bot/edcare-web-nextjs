import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#162726] text-white">
            {/* Subscribe Section */}
            <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 justify-center bg-[#192A29] border border-gray-700 rounded-xl p-6 lg:p-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-center lg:text-left">
                        Subscribe Our NewsLetter For <br /> Latest Update
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Enter Your E-mail"
                            className="border border-gray-700 rounded-full px-4 py-3 w-full sm:w-72 outline-none"
                        />
                        <button className="bg-[#07A698] px-6 sm:px-8 py-3 rounded-full font-semibold w-full sm:w-auto">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-500">
                {/* Get in Touch */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
                    <p className="text-gray-400">Fusce varius dolor tempor interdum <br /> tristiwuei bibendum</p>
                    <h3 className="text-xl font-semibold">+8801914106079</h3>
                    <p>anisur2004r@gmail.com</p>
                </div>

                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">COMPANY INFO</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Resource Center</li>
                        <li>Careers</li>
                        <li>Instructor</li>
                        <li>Become A Teacher</li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">USEFUL LINKS</h3>
                    <ul className="space-y-2">
                        <li>All Courses</li>
                        <li>Digital Marketing</li>
                        <li>Design Branding</li>
                        <li>StoryTelling & Voice Over</li>
                        <li>News & Blogs</li>
                    </ul>
                </div>

                {/* Recent Post */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">RECENT POST</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img className="w-16 h-16 rounded-lg object-cover" src="https://html.rrdevs.net/edcare/assets/img/images/footer-post-1.png" alt="" />
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold">Where Dreams Find A Home</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">20 April, 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img className="w-16 h-16 rounded-lg object-cover" src="https://html.rrdevs.net/edcare/assets/img/images/footer-post-2.png" alt="" />
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold">Where Dreams Find A Home</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">20 April, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 text-center">
                <p className="text-sm text-gray-300">
                    &copy; 2025 Anisur. All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
