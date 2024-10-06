import React from 'react'
import { CategoriesRoundSwiper } from './components/CategoriesRoundSwiper';
import { ProductList } from './components/ProductList';

export const Filter = () => {
  return (
    <div>
        <div className='px-16 md:px-64 mt-16'>
            <CategoriesRoundSwiper />
        </div>
        <div className='px-16 md:px-32'>
            <ProductList />
        </div>
    </div>
  )
}

export default Filter;