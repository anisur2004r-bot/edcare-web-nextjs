import Link from 'next/link';
import React from 'react';
import { IoStar } from "react-icons/io5";

const CourseDitails = ({ courseDitails = [], id }) => {
    
    const filterId = id 
        ? courseDitails.filter(c => c.categoryId == id)
        : courseDitails;

    return (
        <div
            className="
                container mx-auto
                px-4 sm:px-6 md:px-10 lg:px-20 
                py-10
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-6 md:gap-8
            "
        >
            {filterId.map(course => (
                <div
                    key={course.id}
                    className="
                        bg-white 
                        rounded-2xl 
                        shadow-sm 
                        hover:shadow-lg 
                        border border-slate-100 
                        p-4 md:px-5 md:py-8 
                        flex flex-col 
                        transition duration-200
                    "
                >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-44 sm:h-48 lg:h-52 object-cover"
                        />

                        <span
                            className={`
                                absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full 
                                ${
                                    course.isFree
                                        ? 'bg-emerald-100 text-emerald-600'
                                        : 'bg-indigo-100 text-indigo-600'
                                }
                            `}
                        >
                            {course.isFree ? "Free" : "Premium"}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-semibold text-slate-800 leading-snug mb-2 line-clamp-2">
                        {course.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                            📘 Lesson {course.lessons}
                        </span>
                        <span className="flex items-center gap-1">
                            👥 Students {course.students}
                        </span>
                        <span className="flex items-center gap-1">
                            👁 View: {course.views}
                        </span>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center justify-between mb-4">

                        <div className="flex items-center gap-3">
                            {course.instructorAvatar && (
                                <img
                                    src={course.instructorAvatar}
                                    alt={course.instructorName}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    {course.instructorName}
                                </p>
                                <p className="text-xs text-emerald-500">
                                    {course.instructorRole || "Instructor"}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-xs">
                            <div className="flex items-center gap-1 text-[#07A698]">
                                {[...Array(5)].map((_, i) => (
                                    <IoStar key={i} />
                                ))}
                            </div>
                            <span className="font-semibold text-slate-800">
                                {course.rating?.toFixed(1)}
                            </span>
                        </div>
                    </div>

                    {/* Price + Button */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                        <p className="text-lg font-bold text-slate-900">
                            ${course.price?.toFixed(2)}
                        </p>

                        <Link href={`/course/${course.id}`}>
                            <button
                                className="
                                    text-sm font-medium 
                                    px-4 py-2 
                                    rounded-full 
                                    border border-slate-200 
                                    hover:border-[#07A698] 
                                    hover:text-[#07A698] 
                                    transition
                                "
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseDitails;
