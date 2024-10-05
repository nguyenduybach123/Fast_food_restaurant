import { ProductCard } from '@/app/components/Card/ProductCard'
import React from 'react'

const products = [1,2,3,4,5,6,7,8,9,10]

export const ProductList = () => {
  return (
    <div className='mt-16'>
        <h3 className='font-semibold text-lg tracking-wide mb-8'>Product List : </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {
            products.map((product) => (
                <ProductCard key={product} />
            ))
        }
        </div>
    </div>
  )
}
