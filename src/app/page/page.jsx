import React from 'react';
import ShortJurney from '../homeComponants/ShortJurney';
import AskedQuestion from '../homeComponants/AskedQuestion';
import Footer from '@/componants/Footer';

const page = () => {
    return (
        <div>
            <div className='bg-gray-200 text-black'>
                <ShortJurney></ShortJurney>
            </div>
            <div className='bg-white text-black'>
                <AskedQuestion></AskedQuestion>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;