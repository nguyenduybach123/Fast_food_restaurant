import React from 'react'
import { FoodCardInCart } from '../components/Card/FoodCardInCart'
import { Input } from '@/components/ui/input'
import { Button } from '@/components'

const CartPage = () => {
  return (
    <div className='px-4 md:px-16 lg:px-32 xl:px-64'>
        <div className='grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 md:gap-8'>
            <div className='flex flex-col'>
                <FoodCardInCart />
                <FoodCardInCart />
                <FoodCardInCart />
                <FoodCardInCart />
            </div>
            <div className='p-2'>
                <div className='border-gray-500'>
                    <h1 className='py-4 border-b-[1px]'>2 ITEM</h1>
                    <div className='flex flex-col py-4 pb-4 border-b-[1px]'>
                      <h3>Have an Online Coupon ? </h3>
                      <div className='flex items-center space-x-2 my-2'>
                        <Input />
                        <Button>Redeem</Button>
                      </div>
                    </div>
                    <div className='flex flex-col py-4 border-b-[1px]'>
                      <div className='flex items-center justify-between'>
                        <span>Subtotal</span>
                        <span>255.000 đ</span>
                      </div>
                      <div className='flex items-center justify-between text-lg font-semibold'>
                        <span>Subtotal</span>
                        <span>255.000 đ</span>
                      </div>
                    </div>
                    <Button className='w-full'>Checkout</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage