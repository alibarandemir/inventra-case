import React from 'react'

export default function ({topTitle,subTitle}) {
  return (
    <div className='flex flex-col gap-y-3 text-black mt-14 mb-4 text-left'>
        <h2 className='font-bold text-xl'>{topTitle}</h2>
        {subTitle&&<div className='text-gray-600 flex justify-between'><p>{subTitle}</p><span className='underline cursor-pointer'>View All</span></div>}
        
    </div>
  )
}
