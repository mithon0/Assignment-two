import React from 'react';
import Navber from '../../Pages/Navber/Navber';
import Car from '../../Pages/Car/Car';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-slate-200'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;