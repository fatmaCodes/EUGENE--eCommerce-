import React from 'react'

function Card({img,text}) {
  return (
    <div className='h-[13rem] w-[16rem] rounded-xl p-1 bg-slate-50'>
        <img src={img} alt="" className='rounded-xl w-full max-h-[85%]'/>
        <p className='w-full font-[eduBold] my-2 text-center'>{text}</p>
    </div>
  )
}

export default Card