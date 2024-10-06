"use client"
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from './ProductCard'

export const ProductCardSwiper = () => {
  return (
    <div>
        <h1 className='text-2xl mt-16 mb-8 text-[#F17228]'>Popular Products</h1>
        <Swiper
            className='flex justify-center items-center py-2'
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
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
