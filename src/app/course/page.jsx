import React from 'react';
import CoursePage from './courseComponants.jsx/CoursePage';
import Footer from '@/componants/Footer';
import CoursesFetures from './courseComponants.jsx/CoursesFetures';

const page = async () => {

    const res1 = await fetch("http://localhost:5000/courses")
    const courseDitails = await res1.json()
    console.log(courseDitails);
    return (
        <div className='bg-white text-black'>
            <CoursePage></CoursePage>
            <CoursesFetures courseDitails={courseDitails}></CoursesFetures>
            <Footer></Footer>
        </div>
    );
};

export default page;