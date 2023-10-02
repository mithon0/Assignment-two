import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Car = () => {
    const[carData,setCarData]=useState([]);

    useEffect(()=>{
        fetch('Cardata.json')
        .then(res=>res.json())
        .then(data=>setCarData(data))
    },[carData])
    console.log(carData)
    return (
        <div className='bg-slate-50 grid grid-cols-3 mx-3 rounded-lg'>
                {
                    carData.map(car=><CarCard
                    key={car.MilesPerLiter}
                    car={car}
                    ></CarCard>)
                }
        </div>
    );
};

export default Car;