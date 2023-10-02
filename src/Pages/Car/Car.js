import React, { useContext, useEffect, useState } from 'react';
import CarCard from './CarCard';
import { useLoaderData } from 'react-router-dom';
import { dataContext } from '../../Provider/DataProvide';


const Car = () => {
    const{carData,searchData}=useContext(dataContext)
    
    
   

    console.log(searchData)
   
    return (
        <div className='bg-slate-50 grid grid-cols-3 mx-3 rounded-lg'>
                {/* {
                    carData.map(car=><CarCard
                    key={car.MilesPerLiter}
                    car={car}
                    
                    ></CarCard>)
                } */}
    {
        carData
        .filter((value)=>{
            if(searchData==null){
                return value
            }else if(value.CarName.toLowerCase().includes(searchData.toLowerCase())){
                return value
            }
        }).map(car=><CarCard
            key={car.MilesPerLiter}
            car={car}
            
            ></CarCard>)
    }

        </div>
    );
};

export default Car;