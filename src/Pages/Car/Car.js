import React, { useContext, useEffect, useState } from 'react';
import CarCard from './CarCard';
import { useLoaderData } from 'react-router-dom';
import { dataContext } from '../../Provider/DataProvide';


const Car = () => {
    const{carData,searchData}=useContext(dataContext)
    const data =useLoaderData()
    // console.log(data)
// <<<<<<<<<<<<<<<<<<<<<<<<<option1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     let totalCarData = 0;
// for (let i = 0; i < data.length; i++) {

//    // if entity is object, increase objectsLen by 1, which is the stores the total number of objects in array.
//    if (data[i] instanceof Object) {
//     totalCarData++;
//    }
// }
// <<<<<<<<<<<<<<<<<option2>>>>>>>>>>>>>>>>>>>>>>>>>>
  const numberOfItems = data.length;

// console.log(numberOfItems)
 
    // console.log(carData)



    // search function

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