import React from 'react';
import Choose from '../homeComponants/Choose';
import Footer from '@/componants/Footer';
import CourseCategores from '../homeComponants/CourseCategores';

const page = () => {
    return (
        <div>
            <CourseCategores></CourseCategores>
            <Choose></Choose>
            <Footer></Footer>
        </div>
    );
};

export default page;