'use client'

import Image from 'next/image';
import { HandbookData, HandbookEntity } from '@/entities/Handbooks';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { formatCurrency } from '@/utils/currency';

interface HandbookProps {
  data: HandbookData[]
}

function Handbook(props: HandbookProps) {

  const { data } = props;

  return (
    <section className="md:py-7">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Thông tin mới nhất</h2>
        </div>
        <h1 className="flex items-center justify-between relavive w-full mb-6">
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          <span className="text-center mx-4 text-3xl">Cẩm nang làm đẹp</span>
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
        </h1>
        <div className="text-center mb-4">
          <p className="font-bold">Cùng Hoshi khám phá, chia sẻ và học hỏi những phương pháp làm đẹp an toàn, khoa học và hiệu quả để làn da luôn căng tràn sức sống mọi lúc mọi nơi.</p>
        </div>
        <div className=''>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            navigation
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            modules={[Navigation, Pagination]}
            className='flex justify-center'
          >
            {data.map(handbook => (
              <SwiperSlide
                key={handbook.id}
              // className='md:max-w-[60%] !w-screen'
              >
                  <Image src={handbook.imageUrl} alt={handbook.title} width={100} height={100} className='w-full' />
                  <div className='py-2'>
                    <p className='text-base font-bold text-[#f18017]'>{handbook.title}</p>
                    <div dangerouslySetInnerHTML={{ __html: handbook.content.split(' ').slice(0, 15).join(' ')}} className='font-bold text-xs content' />
                    <span>[...]</span>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-4 flex justify-center">
          <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white">Xem thêm</span>
        </div>
      </div>
    </section>
  )
}

export default Handbook