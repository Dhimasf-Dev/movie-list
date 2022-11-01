import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Loading from '../Components/Loading'
import Cards from '../Components/Cards'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataList, setDataList] = useState([])
  const [category, setCategory] = useState("")

  const location = useLocation();

  const fetchDataPopular = () => {
      const url = "https://api.themoviedb.org/3/movie/popular?api_key=19d103226367ceaf13b814607dfd37fb&language=en-US&page=1"

      axios.get(url)
      .then((res) => {
          setDataList(res.data.results)
          setIsLoading(false)
      })
  }

  const fetchDataUpcoming = () => {
      const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=19d103226367ceaf13b814607dfd37fb&language=en-US&page=1"

      axios.get(url)
      .then((res) => {
          setDataList(res.data.results)
          setIsLoading(false)
      })
  }

  const fetchDataPopularTv = () => {
    const url = "https://api.themoviedb.org/3/tv/popular?api_key=19d103226367ceaf13b814607dfd37fb&language=en-US&page=1"

    axios.get(url)
    .then((res) => {
      setDataList(res.data.results)
      setIsLoading(false)
    })
}

const fetchDataUpcomingTv = () => {
    const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

    axios.get(url)
    .then((res) => {
      setDataList(res.data.results)
      setIsLoading(false)
    })
}

  useEffect(() => {
    if (location.state.title === "popular"){
      fetchDataPopular()
      setCategory("movie")
    }

    if (location.state.title === "upComing"){
      fetchDataUpcoming()
      setCategory("movie")
    } 

    if (location.state.title === "popularTv"){
      fetchDataPopularTv()
      setCategory("tv")
    }

    if (location.state.title === "upComingTv"){
      fetchDataUpcomingTv()
      setCategory("tv")
    } 
  },[])

  if (isLoading){
      return <Loading />
  }

  return (
    <div className="pt-5 pb-20">
      <Cards data={dataList} categories={category} />
    </div>
  )
}

export default List