import SectionCategores from '@/componants/HeaderComponants/SectionCategores';
import React from 'react';

const OurInstructor = () => {
    return (
        <div className="bg-[#F3FEFF] py-10">
            <SectionCategores
                title={"Our Instructor"}
                name={"Explore Our World's Best Courses"}
            />

            <div
                className="
                    container mx-auto 
                    px-4 sm:px-6 md:px-12 lg:px-24 
                    py-10
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4 
                    gap-8
                    place-items-center
                "
            >
                {[
                    {
                        img: "https://html.rrdevs.net/edcare/assets/img/team/team-1.png",
                        name: "Zaramane Mass Likan",
                        role: "Online teacher",
                    },
                    {
                        img: "https://html.rrdevs.net/edcare/assets/img/team/team-2.png",
                        name: "Amelia Grace Lily",
                        role: "Online teacher",
                    },
                    {
                        img: "https://html.rrdevs.net/edcare/assets/img/team/team-3.png",
                        name: "Mason Logan Dee",
                        role: "Online teacher",
                    },
                    {
                        img: "https://html.rrdevs.net/edcare/assets/img/team/team-4.png",
                        name: "Isabella Charlotte",
                        role: "Online teacher",
                    },
                ].map((inst, index) => (
                    <div
                        key={index}
                        className="
                            border border-gray-300 
                            rounded-xl 
                            bg-white 
                            shadow-sm 
                            hover:shadow-lg 
                            transition 
                            overflow-hidden
                            w-full
                            max-w-xs
                        "
                    >
                        <img
                            className="w-full h-64 sm:h-72 object-cover rounded-t-xl"
                            src={inst.img}
                            alt={inst.name}
                        />

                        <div className="px-6 py-4 space-y-1">
                            <h3 className="text-lg font-semibold">{inst.name}</h3>
                            <p className="text-[#07A698] text-sm font-medium">{inst.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurInstructor;
