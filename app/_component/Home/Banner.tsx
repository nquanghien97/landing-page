'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image1 from '@/assets/images/banner/trang-chu-1.jpg';
import Image2 from '@/assets/images/banner/trang-chu-2.jpg';
import Image3 from '@/assets/images/banner/anh-trang-gioi-thieu.jpg';
import Image4 from '@/assets/images/banner/anh-trang-uu-dai.jpg';

function Banner() {

  return (
    <section className="m-auto mt-[-1px] w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        {/* <SwiperSlide>
          <Image src={Image1} alt="banner-nho-02-2048x841" width={1024} height={726} className="w-full h-full" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} alt="banner-nho-02-2048x841" width={1024} height={726} className="w-full h-full" unoptimized />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image src={Image3} alt="banner-nho-02-2048x841" width={1024} height={726} className="w-full h-full" unoptimized />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image4} alt="banner-nho-02-2048x841" width={1024} height={726} className="w-full h-full" unoptimized />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner