import React from 'react'

import backgroundImage from '../../../assets/images/home/Background.png'
import Image from 'next/image'


export const BackgroundCategories = () => {
  return (
    <div className='relative h-full'>
        <Image className='absolute w-full top-1/2 -translate-y-1/2 lef-1/2' src={backgroundImage} alt='background' height={500} />
    </div>
  )
}
