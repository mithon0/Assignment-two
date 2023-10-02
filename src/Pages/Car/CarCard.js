import React from 'react';

const CarCard = ({car}) => {
        const{MilesPerLiter,CarPictureURL,CarMake,CarModel,ReleaseYear,SeatNumber,RentPricePerMonth,DriveAutomatic,FuelType,}=car;

    return (
        <div className='mx-auto bg-white p-4 my-2'>
           <div className='w-[340px]'>
            <img className='w-full h-44' src={CarPictureURL} alt="" />
           </div>
           <div className='flex justify-between items-center mt-4 mx-2'>
                <h1 className='text-lg font-bold'>{CarMake} {CarModel}</h1>
                <div className='px-2 border-dashed border-2 font-semibold  border-blue-600 rounded-full'>
                    <p>{ReleaseYear}</p>
                </div>
           </div>
        </div>
    );
};

export default CarCard;