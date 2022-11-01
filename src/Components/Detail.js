import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { setFavouriteList } from '../Redux/Action/Counter.js';
import { Rating } from "flowbite-react";
import Loading from './Loading';

const Detail = () => {
    const [dataDetail, setDataDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isFav, setIsFav] = useState(false) 

    const location = useLocation();
    const dispatch = useDispatch();
    const dataFavourite = useSelector((state) => state.counter.favorite)

    const fetchDataVideo = () => {
        const url = location.state.categories === "movie" ? `https://api.themoviedb.org/3/movie/${location.state.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` :
                                                           `https://api.themoviedb.org/3/tv/${location.state.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  
        axios.get(url)
        .then((res) => {
            setDataDetail(res.data)
            setIsLoading(false)
        })
    }

    const checkFavourite = () => {
        const cekData = dataFavourite ? dataFavourite.filter(fav => fav.id === location.state.id) : ''

        if (cekData.length !== 0){
            setIsFav(true)
        }
    }

    const handleFavorite = (val) => {
        setIsFav(!isFav)
        
        if(isFav === false){
            dispatch(setFavouriteList([...dataFavourite, val]))
        } else {
            const remove = dataFavourite.filter(fav => fav.id !== val.id)
            dispatch(setFavouriteList(remove))
        }
    }

    useEffect(() => {
        fetchDataVideo();
        checkFavourite();
    },[])

    if (isLoading){
        return <Loading />
    }

    return (
        <div className='px-12'>
            <img  
                className='object-contain rounded-lg mx-auto'                      
                src={`https://image.tmdb.org/t/p/w780${dataDetail.backdrop_path}`}
                alt="..."
            />
            <h1 className='mt-5 text-2xl font-bold'>{dataDetail.title}</h1>
            <div>
                {
                    dataDetail.genres.map((val, index) => (
                        <span className='text-base text-gray-400 font-semibold' key={index}>
                            {val.name + ' - '}
                        </span>
                    ))
                }
                <span className='text-base text-gray-400 font-semibold'>{dataDetail.release_date}</span>
                <div className='text-sm mt-5'>
                    {dataDetail.overview}
                </div>
                <Rating className="mt-5">
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold ">
                        {dataDetail.vote_average}
                    </p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500" />
                    <a
                        href="#"
                        className="text-sm font-medium hover:no-underline dark:text-white"
                    >
                        {dataDetail.vote_count} reviews
                    </a>
                </Rating>
                <div onClick={() => handleFavorite(dataDetail)} className='text-sm my-5 mb-20 cursor-pointer'>
                    {
                        isFav ? 
                        <>
                            <svg className="w-8 h-8 ml-4 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <div>unfavorite</div>
                        </> :
                        <>
                            <svg className="w-8 h-8 ml-2 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            <div>Favorite</div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail