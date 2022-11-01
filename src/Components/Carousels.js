import React from 'react';
import { Carousel } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const Carousels = ({data, categories}) => {
    const navigate = useNavigate();

    const handleNavigate = (val) => {
        navigate("/detail", {state: {id: val.id, categories: categories}})
    }
    
    return (
        <div className="mx-5 lg:mx-20 lg:h-full bg-transparent">
            <Carousel indicators={false} slideInterval={5000}>
                {
                    data.map((val, index) => (
                        <div onClick={() => handleNavigate(val)} key={index} className="relative flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                            <img  
                                className='object-contain'                      
                                key={index}
                                src={`https://image.tmdb.org/t/p/w780${val.backdrop_path}`}
                                alt="..."
                            /> 
                            <div className='absolute bg-black/60 rounded text-sm px-2 left-16 top-0 lg:top-5 lg:left-48 font-bold lg:text-xl'>{val.title}</div>
                        </div>
                    ))  
        
                }
            </Carousel>
        </div>

    )
}

export default Carousels