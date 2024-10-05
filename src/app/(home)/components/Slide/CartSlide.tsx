import React from 'react'
import { CartSlideItem } from './CartSlideItem'

export const CartSlide = () => {
  return (
    <div className='fixed inset-0 w-screen h-screen bg-[#00000080] z-40'>
        <div className='absolute top-0 right-0 w-80 h-screen bg-white z-50'>
          <CartSlideItem />
          <CartSlideItem />
          <CartSlideItem />
          <CartSlideItem />
          <CartSlideItem />
        </div>
    </div>
  )
}
