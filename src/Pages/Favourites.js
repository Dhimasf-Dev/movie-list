import React from 'react'
import { useSelector } from "react-redux"
import Cards from '../Components/Cards'

const List = () => {
  const dataFavourite = useSelector((state) => state.counter.favorite)

  if (dataFavourite.length === 0){
    return (
      <div className="py-[40vh] text-center text-white">
        No favourite
      </div>
    )
  }

  return (
    <div className="pt-5 pb-20">
      <Cards data={dataFavourite}/>
    </div>
  )
}

export default List