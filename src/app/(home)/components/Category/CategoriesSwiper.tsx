"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryItem from './CategoryItem'
import { Navigation, Pagination } from 'swiper/modules'

const CategoriesSwiper = () => {
  return (
    <div className='mt-16 flex justify-center items-center'>
        <Swiper
            className='flex justify-center items-center'
            pagination={{
              clickable: true,
            }}
    
            breakpoints={{
              '@0.00': {
                  slidesPerView: 3,
                  spaceBetween: 2,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryItem />
            </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default CategoriesSwiper