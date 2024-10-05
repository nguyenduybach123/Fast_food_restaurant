import React from 'react'
import { GuideItem } from './GuideItem'

export const GuideSection = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mt-16 mb-8 text-[#F17228]'>How does it work</h1>
      <div className='flex justify-center items-center'>
        <GuideItem />
        <GuideItem />
        <GuideItem />
        <GuideItem />
      </div>
    </div>
  )}
