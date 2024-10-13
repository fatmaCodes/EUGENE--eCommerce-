import React from 'react'
import { useParams } from 'react-router-dom'



function CustomProduct() {
    const {categ} = useParams()
  return (
    <div className='h-full w-full flex justify-center items-center text-4xl text-slate-50'>
      this is {categ} page
    </div>
  )
}

export default CustomProduct