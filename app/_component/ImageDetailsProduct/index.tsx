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
      <div className="max-w-[495px]">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <Image src={item.imageUrl} alt={item.title || ''} width={495} height={495} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data.length !== 1 && (
        <div className="max-w-[495px] my-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-[495px]"
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <Image src={item.imageUrl} alt={item.title || ''} width={100} height={100} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default LienHe