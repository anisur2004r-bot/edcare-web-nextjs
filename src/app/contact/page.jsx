import React from 'react';
import Subscribe from '../homeComponants/Subscribe';
import Footer from '@/componants/Footer';
import ShortJurney from '../homeComponants/ShortJurney';
import NewsBlog from '../homeComponants/NewsBlog';
import About from '../homeComponants/About';

const page = () => {
    return (
        <div className='bg-white text-black'>
            <Subscribe></Subscribe>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default page;