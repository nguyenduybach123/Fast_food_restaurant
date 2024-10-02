import cn from 'classnames'
import React from 'react'

export const ProductCardFeatured = ({isReverse = false}: {isReverse?: boolean}) => {
  return (
    <div className={cn('flex py-3 rounded-md mb-16', isReverse ? 'flex-row-reverse' : "")} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}>
        <div className='w-[400px] p-8'>
            <p className='mb-4 text-4xl font-semibold tracking-wide'>
                Best deals
                <i className='text-[#FFB30E] ml-2'>Pizza Cake</i>
            </p>
            <span className='w-4/5 text-md text-gray-300 leading-normal'>
                Enjoy the large size of sandwiches. Complete 
                perfect slice of sandwiches.
            </span>
            <button className='w-full text-white text-md font-semibold px-5 py-2 mt-8 rounded-lg bg-[#FFB800]' style={{boxShadow: "0px 5px 10px #FA6323"}} >PROCEED TO ORDER</button>
        </div>
        <div className='flex-1 bg-cover bg-center bg-no-repeat' style={{background: `url(https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600`}}>
        </div>
    </div>
  )
}
