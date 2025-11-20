"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navber = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "COURSES", href: "/course" },
        { name: "SHOP", href: "/shop" },
        { name: "PAGE", href: "/page" },
        { name: "BLOG", href: "/blog" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md text-black">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-20 py-4 font-semibold">
                <p className="hidden md:block text-[#07A698]">CATEGORIES</p>

                <div className="hidden md:flex gap-10">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-[#07A698] text-black duration-300"
                        >
                            {link.name}
                            <select className="ml-1 outline-none border-none bg-transparent"></select>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-200">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-6 py-4 border-b border-gray-200 hover:bg-[#F0FCFF] hover:text-[#07A698] duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>

    );
};

export default Navber;
