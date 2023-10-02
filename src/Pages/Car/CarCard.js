import React from 'react';
import { FaUserFriends,FaGasPump,FaTachometerAlt, FaRegHeart } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
const CarCard = ({car}) => {
        const{MilesPerLiter,CarPictureURL,CarMake,CarModel,ReleaseYear,SeatNumber,RentPricePerMonth,DriveAutomatic,FuelType,}=car;

    return (
        <div className='mx-auto bg-blue-50 p-4 my-2 rounded-xl'>
           <div className='w-[340px]'>
            <img className='w-full rounded-xl h-52' src={CarPictureURL} alt="" />
           </div>
           <div className='flex justify-between items-center mt-4 mx-2'>
                <h1 className='text-lg font-bold'>{CarMake} {CarModel}</h1>
                <div className='px-2 border-dashed border-2 font-semibold  border-blue-600 rounded-full'>
                    <p>{ReleaseYear}</p>
                </div>
           </div>
           <div className='grid grid-cols-2 mt-4 mx-2'>
            <div>
                <h1 className='flex gap-1 items-center text-base font-semibold text-slate-600'><FaUserFriends className='text-blue-400 text-xl'/>{SeatNumber} People</h1>
            </div>
            <div>
                <h1 className='flex gap-1 items-center text-base font-semibold text-slate-600'><FaGasPump className='text-blue-400 text-xl'/>{FuelType}</h1>
            </div>
            
            
           </div>
           <div className='grid grid-cols-2 mt-3 mx-2 mb-6'>
            <div>
                <h1 className='flex gap-1 items-center text-base font-semibold text-slate-600'><FaTachometerAlt className='text-blue-400 text-xl'/>{MilesPerLiter}km/1-litre</h1>
            </div>
            <div>
                <h1 className='flex gap-1 items-center text-base font-semibold text-slate-600'><GiSteeringWheel className='text-blue-400 text-xl'/>{DriveAutomatic===true?"Automatic":"not-automatic"}</h1>
            </div>
            
            
           </div>
           <hr className='' />
           <div className='flex justify-between items-center'>
            <h2 className='font-bold text-xl text-slate-600'>${RentPricePerMonth}/ <span className='text-xs'>month</span></h2>
            <div className='mt-3 flex items-center'>
                <button className='p-3 rounded bg-blue-200 mx-2 text-blue-700 '><FaRegHeart/></button>
                <button className='py-2 px-3 bg-blue-500 rounded text-white'>Rent now</button>
            </div>
           </div>
        </div>
    );
};

export default CarCard;