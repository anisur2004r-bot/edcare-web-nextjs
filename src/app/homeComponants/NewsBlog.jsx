import SectionCategores from '@/componants/HeaderComponants/SectionCategores';
import React from 'react';

const NewsBlog = () => {
    const blogs = [
        {
            img: "https://html.rrdevs.net/edcare/assets/img/blog/post-1.jpg",
            category: "LEARNING",
            title: "Repurpose mission critical action life items rather total linkage suds",
            date: "August 20, 2025",
            author: "Marketing",
        },
        {
            img: "https://html.rrdevs.net/edcare/assets/img/blog/post-2.png",
            category: "LEARNING",
            title: "Strategies for Managing Stress and Preventing Burnout in Education",
            date: "August 20, 2025",
            author: "Marketing",
        },
    ];

    return (
        <div className="py-14">
            <SectionCategores title={"News & Blog"} name={"Latest News Updates"} />

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl overflow-hidden h-80 sm:h-96 bg-cover bg-center"
                        style={{ backgroundImage: `url(${blog.img})` }}
                    >
                        <div className="absolute items-start  inset-0 bg-gray-900/40 flex flex-col justify-end p-6 sm:p-10 gap-4 text-white h-full">
                            <p className="bg-white inline-block px-4 py-1 text-[#39B8AD] text-sm sm:text-base font-semibold rounded-full">
                                {blog.category}
                            </p>
                            <h3 className="text-lg sm:text-2xl font-semibold leading-snug">{blog.title}</h3>
                            <div className="flex gap-6 text-sm sm:text-base text-gray-200">
                                <p>{blog.date}</p>
                                <p>{blog.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsBlog;
