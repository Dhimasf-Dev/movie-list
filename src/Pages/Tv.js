import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Loading from '../Components/Loading'
import Carousel from '../Components/Carousels'
import Cards from '../Components/Cards'

const Tv = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dataTopRate, setDataTopRate] = useState([])
    const [dataPopular, setDataPopular] = useState([])
    const [dataUpComing, setDataUpComing] = useState([])

    const navigate = useNavigate();

    const fetchDataTopRate = () => {
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataTopRate(res.data.results.slice(0, 5))
        })
    }

    const fetchDataPopular = () => {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataPopular(res.data.results.slice(0, 5))
        })
    }

    const fetchDataUpcoming = () => {
        const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

        axios.get(url)
        .then((res) => {
            setDataUpComing(res.data.results.slice(0, 5))
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchDataTopRate();
        fetchDataPopular();
        fetchDataUpcoming();
    },[])

    if (isLoading){
        return <Loading />
    }

    return (
        <>
            <div>
                <div className='text-sm lg:text-2xl font-bold py-5 px-12'>Top Rated</div>
                <Carousel data={dataTopRate} categories={"tv"}/>
            </div>
            <div className="pt-20">
                <div className='flex justify-between px-12'>
                    <div className="text-sm lg:text-2xl font-bold py-5">Popular</div>
                    <div onClick={() => navigate('/list', {state: {title: 'popularTv'}})} className='text-sm lg:text-base font-bold py-5 cursor-pointer'>See more</div>
                </div>
                <Cards data={dataPopular} categories={"tv"} />
            </div>
            <div className="pt-10 pb-20">
                <div className='flex justify-between px-12'>
                    <div className='text-sm lg:text-2xl font-bold py-5'>Upcoming TV</div>
                    <div onClick={() => navigate('/list', {state: {title: 'upComingTv'}})} className='text-sm lg:text-base font-bold py-5 cursor-pointer'>See more</div>
                </div>
                <Cards data={dataUpComing} categories={"tv"} />
            </div>
        </>
    )
}

export default Tv