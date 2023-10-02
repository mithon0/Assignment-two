import React from 'react';

const Navber = () => {
    return (
        <div className='mx-3 rounded-lg border px-5 flex items-center gap-8 bg-slate-50'>
            <div className='my-4'>
                <input className='px-3 py-1 w-96 rounded-full' type="text" placeholder='Search...' />
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