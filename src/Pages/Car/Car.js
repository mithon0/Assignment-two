import React, { useContext, useEffect, useState } from 'react';
import CarCard from './CarCard';

import { dataContext } from '../../Provider/DataProvide';


const Car = () => {
    const { carData, searchData } = useContext(dataContext)
    const [currentPage,setCurrentPage]=useState(1)
    const filteredValue =carData.filter((value) => {
        if (searchData == null) {
            return value
        } else if (value.CarName.toLowerCase().includes(searchData.toLowerCase())) {
            return value
        }
    })
// todo pagination
console.log(carData.length);
const DataPerPage =6;
const lastIndex = currentPage * DataPerPage;
const firstIndex = lastIndex - DataPerPage;
const records = filteredValue.slice(firstIndex,lastIndex);
const numberOfPage =Math.ceil(carData.length/DataPerPage);
const numbers =[...Array(numberOfPage+1).keys()].slice(1)

console.log(numberOfPage)
    console.log()
    const prevPagehandler=()=>{
        if(currentPage>=1){
            setCurrentPage(currentPage-1)

        }
    }

    const nextPagehandler=()=>{
        if(currentPage>=0 && currentPage<5){
            setCurrentPage(currentPage+1)
        }
    }
    const pageNumberHandler=(num)=>{
       
            setCurrentPage(num)
      
    }
    useEffect(()=>{
        if(currentPage==0){
            setCurrentPage(1)
        }
    })
    return (
       <div>
         <div className='bg-slate-50 grid grid-cols-3 mx-3 rounded-lg'>
            {/* {
                    carData.map(car=><CarCard
                    key={car.MilesPerLiter}
                    car={car}
                    
                    ></CarCard>)
                } */}
            {
               records.map(car => <CarCard
                        key={car.MilesPerLiter}
                        car={car}

                    ></CarCard>)
            }

        </div>
        <div className='flex justify-between bg-white p-4'>
            <h2>{DataPerPage} of {carData.length}</h2>
        <ul className='flex gap-2'>
            <li>
                <a onClick={prevPagehandler} className='px-3 py-1 rounded text-blue-700 border-2 border-blue-700' href={`#${currentPage}`}>Prev</a>
            </li>
            {
                numbers.map((number,index)=><li
                key={index}
                className='   rounded-lg'
                >
                    <a onClick={()=>pageNumberHandler(number)} className={`px-3 py-2 ${currentPage===number?"bg-blue-900":"bg-blue-300"}`} href={`#${number}`}>{number}</a>
                </li>)
            }
            <li>
                <a onClick={nextPagehandler} className='px-3 py-1 rounded text-blue-700 border-2 border-blue-700' href={`#${currentPage}`}>Next</a>
            </li>
        </ul>
        </div>
       </div>
    );
};

export default Car;