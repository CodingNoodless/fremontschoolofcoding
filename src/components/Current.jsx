import React from 'react';
import Carousal from './Carousel';

const Current = () => {
  return (
    <div id="current-section" className='pb-10 px-4 sm:px-10 lg:px-20'>
        <h1 className='text-left pt-10 font-bold text-3xl text-zinc-50' style={{ fontFamily: 'Poppins, sans-serif'}}>
            {"</ Current Initiatives>"}
        </h1>
        <div className="current-section">
            <p className="font-nanum pl-3 text-center lg:text-left text-gray-50">We currently lead initiatives at Centerville Middle School, along with an upcoming program at Vallejo Mill Elementary. Our program at Centerville Middle School is the longest running, as this is it's 4th year!</p>
            <Carousal/>
        </div>
    </div>
  )
}

export default Current