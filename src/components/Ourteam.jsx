import React from 'react';
import Circle from '../assets/cirlce.png';

const teamMembers = [

];

const Ourteam = () => {
  return (

    <div className="flex flex-col items-center pt-10">
      <h1
        className="text-center font-bold text-4xl text-slate-100"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {'</ MEET OUR 2024-2025 TEAM >'}
      </h1>
      {/* <div className='text-slate-50'>
          <div className="flex flex-col items-center">
            <img
              src={Circle}
              alt='Rohit Pulle'
              className="h-40 w-40 object-cover mb-2"
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold">Rohit Pulle</h2>
              <p className="text-sm">Founder/President</p>
            </div>
          </div>
      </div> */}
      <div className='inner-rows text-slate-50'>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={Circle}
                alt={member.name}
                className="h-40 w-40 object-cover mb-2"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ourteam;
