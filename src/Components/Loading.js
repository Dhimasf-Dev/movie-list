import React from 'react'
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="text-center">
        <Spinner className="my-[40vh] w-20 h-20" aria-label="Default status example" />
    </div>
  )
}

export default Loading