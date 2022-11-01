import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Loading from '../Components/Loading'
import Carousel from '../Components/Carousels'
import Cards from '../Components/Cards'

const Movie = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dataTopRate, setDataTopRate] = useState([])
    const [dataPopular, setDataPopular] = useState([])
    const [dataUpComing, setDataUpComing] = useState([])

    const navigate = useNavigate();

    const fetchDataTopRate = () => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataTopRate(res.data.results.slice(0, 5))
        })
    }

    const fetchDataPopular = () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataPopular(res.data.results.slice(0, 5))
        })
    }

    const fetchDataUpcoming = () => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataUpComing(res.data.results.slice(0, 5))
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchDataTopRate()
        fetchDataPopular()
        fetchDataUpcoming()
    },[])

    if (isLoading){
        return <Loading />
    }

    return (
       <>
            <div>
                <div className='text-sm lg:text-2xl font-bold py-5 px-12'>Top Rated</div>
                <Carousel data={dataTopRate} categories={"movie"} />
            </div>
            <div className="pt-20">
                <div className='flex justify-between px-12'>
                    <div className="text-sm lg:text-2xl font-bold py-5">Popular</div>
                    <div onClick={() => navigate('/list', {state: {title: 'popular'}})} className='text-sm lg:text-base font-bold py-5 cursor-pointer'>See more</div>
                </div>
                <Cards data={dataPopular} categories={"movie"} />
            </div>
            <div className="pt-10 pb-20">
                <div className='flex justify-between px-12'>
                    <div className='text-sm lg:text-2xl font-bold py-5'>Upcoming Movie</div>
                    <div onClick={() => navigate('/list', {state: {title: 'upComing'}})} className='text-sm lg:text-base font-bold py-5 cursor-pointer'>See more</div>
                </div>
                <Cards data={dataUpComing} categories={"movie"} />
            </div>
       </>
    )
}

export default Movie