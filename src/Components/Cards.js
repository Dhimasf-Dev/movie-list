import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({data, categories}) => {
    const navigate = useNavigate();

    const handleNavigate = (val) => {
        navigate("/detail", {state: {id: val.id, categories: categories}})
    }

    return (
        <div className="px-12">
            <div className="grid gap-10 lg:grid lg:grid-cols-5 lg:gap-5">
            {
                data.map((val, index) => (
                    <div key={index} onClick={() => handleNavigate(val)} className=" cursor-pointer relative flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                        <img  
                            className='object-contain'                      
                            key={index}
                            src={`https://image.tmdb.org/t/p/w780${val.backdrop_path}`}
                            alt="..."
                        /> 
                        <div className='absolute px-2 bg-black/60 rounded text-sm left-1 top-3 lg:top-1 lg:left-1 font-bold lg:text-sm z-10'>{val.title}</div>
                    </div>
    
                ))
            }
            </div>
        </div>
    )
}

export default Cards