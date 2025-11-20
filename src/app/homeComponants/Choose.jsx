import SectionCategores from '@/componants/HeaderComponants/SectionCategores';
import React from 'react';

const Choose = () => {
    return (
        <div className="bg-[#181F24] text-white py-10">

            {/* Heading */}
            <SectionCategores
                title={"Why Choose Us"}
                name={"Explore Yourself All Over The World"}
            />

            {/* Boxes */}
            <div
                className="
                    container mx-auto 
                    px-6 md:px-16 lg:px-24 
                    py-10 
                    grid 
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                    gap-12 lg:gap-6 
                    place-items-center
                "
            >
                {/* Single Box */}
                {[
                    {
                        icon: "https://html.rrdevs.net/edcare/assets/img/icon/promo-4.png",
                        img: "https://html.rrdevs.net/edcare/assets/img/images/promo-img-1.png",
                        title: "Book Free Consultation",
                    },
                    {
                        icon: "https://html.rrdevs.net/edcare/assets/img/icon/promo-5.png",
                        img: "https://html.rrdevs.net/edcare/assets/img/images/promo-img-2.png",
                        title: "Make Easy Payment",
                    },
                    {
                        icon: "https://html.rrdevs.net/edcare/assets/img/icon/promo-6.png",
                        img: "https://html.rrdevs.net/edcare/assets/img/images/promo-img-3.png",
                        title: "Schedule First Lesson",
                    }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3 items-center text-center">

                        {/* Images */}
                        <div className="flex flex-col items-center -mt-6 relative">
                            <img
                                className="
                                    border-2 border-gray-700 
                                    p-3 rounded-full 
                                    z-10 bg-[#07A698] 
                                    w-16 h-16 sm:w-20 sm:h-20 object-contain
                                "
                                src={item.icon}
                                alt=""
                            />
                            <img
                                className="w-40 sm:w-48 mt-[-30px]"
                                src={item.img}
                                alt=""
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>

                        {/* Text */}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            Standards in leadership skills synergize <br />
                            optimal expertise rather than innovative <br />
                            leadership skills.
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Choose;
