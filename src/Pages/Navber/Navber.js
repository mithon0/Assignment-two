import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataContext } from '../../Provider/DataProvide';

const Navber = () => {
    const {handleSearch}=useContext(dataContext)

   
    const searchHandler=(e)=>{
        const value = e.target.value;

        console.log(value)
        handleSearch(value)
    }
    return (
        <div className='mx-3 rounded-lg border px-5 flex items-center gap-8 bg-slate-50'>
            <div className='my-4 relative'>
                <input onChange={searchHandler}   className='px-3 py-1 w-96 rounded-full' type="text" placeholder='Search...' />
                <button><FaSearch className='absolute top-2 left-[360px]'/></button>
            </div>
            <div>
                <select className='px-2 py-1 rounded-lg ' name="" id="">
                    <option className='text-slate-500' value="relavence">Relavence</option>
                </select>
            </div>
            <div>
                <select className='px-2 py-1 rounded-lg' name="" id="">
                    <option value="all_brands">All Brands</option>
                </select>
            </div>
            
        </div>
    );
};

export default Navber;