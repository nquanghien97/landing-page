'use client'

import React, { useState } from 'react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

interface ImageDetailsProductProps {
  data: {
    id: number;
    imageUrl: string;
    title?: string;
    productId?: number;
  }[]
}

function LienHe(props: ImageDetailsProductProps) {
  const { data } = props
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <div className="max-w-full lg:max-w-[495px] max-lg:p-4">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.title || ''} width={1024} height={1024} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data.length !== 1 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={3}
            modules={[FreeMode, Navigation, Thumbs]}
            className="flex justify-start mt-2 md:max-w-[495px]"
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <Image src={item.imageUrl} alt={item.title || ''} width={100} height={100} className="md:w-[495px] w-[300px]" />
              </SwiperSlide>
            ))}
          </Swiper>
      )}
    </>
  )
}

export default LienHe