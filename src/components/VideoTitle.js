import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/4 py-6 text-lg '>{overview}</p>
      <div className='flex gap-[15px]'>
        <button className=' bg-white text-black px-[2rem] py-[0.3rem] rounded-[4px] text-[1.6rem] font-medium leading-10 hover:bg-opacity-80'>▶️ Play</button>
        <button className='bg-white text-black hover:bg-opacity-80 px-[2.5rem] py-[0.3rem] rounded-[4px]'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
