import React from 'react';
import NewsBlog from '../homeComponants/NewsBlog';
import Footer from '@/componants/Footer';
import ComplateCourse from '../homeComponants/ComplateCourse';

const page = () => {
    return (
        <div className='bg-white text-black'>
            <NewsBlog></NewsBlog>
            <div className='mb-10'>
                <ComplateCourse></ComplateCourse>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;