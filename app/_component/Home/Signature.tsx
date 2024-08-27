'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image1 from '@/assets/images/signatures/trang-chu-3.jpg';
import Image2 from '@/assets/images/signatures/trang-chu-4.jpg';
import Image3 from '@/assets/images/signatures/trang-chu-5.jpg';

function Products() {

  return (
    <section className="md:py-7">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Signature</h2>
        </div>
        <h1 className="flex items-center justify-between relavive w-full mb-6">
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          <span className="text-center mx-4 text-3xl uppercase">Giá trị nổi bật</span>
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
        </h1>
        <div className="text-center mb-4">
          <p className="font-bold">MỘC ĐƠN là kết quả của hành trình tìm kiếm và phát triển từ các thảo dược tự nhiên quý hiếm, được kết hợp bởi những tinh hoa của Y Học Cổ Truyền và Công Nghệ Hiện Đại. Mỗi viên Mộc Đơn đều mang trong mình sứ mệnh giúp phụ nữ vượt qua nỗi lo về U XƠ, U NANG, U LÀNH TÍNH, để họ có thể sống trọn vẹn hơn, tự tin hơn.</p>
        </div>
        <div className=''>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={60}
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <Image src={Image1} alt="banner-nho-02-2048x841" className="w-screen" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Image2} alt="banner-nho-02-2048x841" className="w-screen" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Image3} alt="banner-nho-02-2048x841" className="w-screen" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Products