import React from 'react'
import { CheckIcon, GeoIcon } from '../../components/Icon'

export const DeliveryQuickly = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-4/5'>
          <div className='flex items-center px-2 md:px-8 mb-4'>
              <GeoIcon />
              <h3 className='ml-4 text-2xl text-[#605c5c]'>Washington</h3>
          </div>
          <h1 className='mb-4 text-5xl text-center font-bold'>Discover Restaurants <br /> that deliver near you</h1>
          <div className='p-3 mx-2 md:mx-8 flex bg-white shadow-lg rounded-2xl'>
            <input className='flex-1 outline-none border-none bg-transparent' type="text" placeholder='Enter delivery address' />
            <button className='flex justify-between items-center p-3 text-white bg-red-600 rounded-2xl'>
              <CheckIcon />
              OK
            </button>
          </div>
        </div>
    </div>
  )
}
