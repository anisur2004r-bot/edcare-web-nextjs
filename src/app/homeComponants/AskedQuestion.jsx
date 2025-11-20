import React from 'react';
import { IoArrowRedoSharp } from "react-icons/io5";

const AskedQuestion = () => {
    return (
        <div className="py-14">
            <div
                className="
                    container mx-auto
                    flex flex-col lg:flex-row 
                    items-center justify-center 
                    gap-12 lg:gap-20
                    px-4 sm:px-6 md:px-12 lg:px-24
                "
            >
                {/* Left Image */}
                <img
                    className="rounded-2xl w-full sm:w-96 md:w-[420px] lg:w-[480px]"
                    src="https://html.rrdevs.net/edcare/assets/img/images/faq-img.png"
                    alt=""
                />

                {/* Right Content */}
                <div className="flex flex-col gap-6 lg:gap-7 max-w-xl">

                    {/* Badge */}
                    <div
                        className="
                            flex items-center gap-2 
                            border border-gray-400 
                            rounded-full 
                            px-3 py-1 
                            w-fit
                        "
                    >
                        <div className="border border-gray-400 p-1 rounded-full bg-[#DAF2F0] text-[#07A698]">
                            <IoArrowRedoSharp />
                        </div>
                        <p className="text-sm sm:text-base">Asked Question</p>
                    </div>

                    {/* Heading */}
                    <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
                        Powerful Dashboard And <br /> High Performance Framework
                    </h3>

                    {/* FAQ 1 */}
                    <h4 className="font-semibold text-lg">01. What courses do you offer?</h4>

                    <p className="text-gray-700 leading-relaxed border-t pt-4 border-gray-300 text-sm sm:text-base">
                        We offer a wide range of courses in various subjects, including science,
                        technology, engineering, mathematics, humanities, and social sciences.
                        Our courses are designed for all education levels, from primary school
                        to university.
                    </p>

                    {/* FAQ 2 */}
                    <p className="font-semibold text-sm sm:text-base flex justify-between items-center">
                        02. How Can Teachers Effectively Manage a Diverse Classroom?
                        <select className="border p-1 rounded-md bg-white ml-2"></select>
                    </p>

                    {/* FAQ 3 */}
                    <p className="font-semibold text-sm sm:text-base flex justify-between items-center">
                        03. How Is Special Education Delivered in Inclusive Classrooms?
                        <select className="border p-1 rounded-md bg-white ml-2"></select>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AskedQuestion;
