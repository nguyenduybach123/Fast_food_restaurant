import { ArrowShortIcon, PizzaIcon } from '@/app/components/Icon'
import React from 'react'

const CategoryItem = () => {
  return (
    <div className='flex items-end w-40 h-40 px-2 py-2 rounded-md bg-center bg-cover bg-no-repeat cursor-pointer' style={{backgroundImage: "url('https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className='flex flex-1 items-center px-3 py-2 rounded-md bg-white'>
            <div className='flex-1 pr-5 flex items-center'>
                <PizzaIcon />
                <span className='ml-2'>Pizza</span>
            </div>
            <div>
                <ArrowShortIcon />
            </div>
        </div>
    </div>
  )
}

export default CategoryItem