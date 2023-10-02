import React, { createContext, useEffect, useState } from 'react';
export const dataContext =createContext(null)




const DataProvide = ({children}) => {
    const[carData,setCarData]=useState([]);
    const [searchData,setSearchData]=useState("")
    useEffect(()=>{
        fetch('Cardata.json')
        .then(res=>res.json())
        .then(data=>setCarData(data))
    },[carData])

    const handleSearch = (value) => {
       
        setSearchData(value)
      };
    const dataInfo={
        handleSearch,
        carData,
        searchData
    }
    return (
       <dataContext.Provider value={dataInfo}>{children}</dataContext.Provider>
    );
};

export default DataProvide;