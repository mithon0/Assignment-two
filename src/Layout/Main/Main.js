import React from 'react';
import Navber from '../../Pages/Navber/Navber';
import Car from '../../Pages/Car/Car';

const Main = () => {
    return (
        <div className='bg-slate-200'>
            <Navber></Navber>
            <Car></Car>
        </div>
    );
};

export default Main;