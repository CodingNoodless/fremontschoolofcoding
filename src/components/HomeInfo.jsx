import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
 // Ensure you're importing this from the correct package
import Startclub from './Startclub';

const HomeInfo = () => {
  const [textColor, setTextColor] = useState('#0aefff');

  return (
    <div id="home-section" className='pb-11'>
      <h1
        className='text-center pt-20 font-bold text-7xl opacity-95 text-slate-50'
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {'</ Fremont School of Coding >'}
      </h1>
      <div className='text-center pt-10 font-bold text-slate-50 text-3xl' style={{ fontSize: '2em', color: textColor }}>
        <TypeAnimation
          sequence={[
            'We Code ...',
            2000,
            () => setTextColor('#ff0054'), // Change text color
            'We Learn ...',
            2000,
            () => setTextColor('#ffff3f'), // Change text color
            'We Innovate ...',
            2000,
            () => setTextColor('#a1ff0a'), // Change text color
            'We Create ...',
            2000,
            () => setTextColor('#0aefff'), // Change text color
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          cursorColor="#333"
        />
      </div>
      <p className='text-center pt-10 pb-5 text-white text-xl' style={{ maxWidth: '60%', margin: '0 auto' }}>
        The Fremont School of Coding is a dynamic educational institution that makes tech accessible by offering free coding and software development training for students.
      </p>
    </div>
  );
};

export default HomeInfo;