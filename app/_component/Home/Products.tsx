'use client'

import Image from 'next/image';
import { DataProducts, ProductEntity } from '@/entities/Products';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { formatCurrency } from '@/utils/currency';
import { useRouter } from 'next/navigation';
import NavLink from '../NavLink';

interface ProductProps {
  data: DataProducts[]
}

function Products(props: ProductProps) {

  const { data } = props;
  const router = useRouter();

  return (
    <section className="md:py-7">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Sản phẩm</h2>
        </div>
        <h1 className="flex items-center justify-between relavive w-full mb-6">
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          <span className="text-center mx-4 text-3xl">HOSHI KHUYÊN DÙNG</span>
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
        </h1>
        <div className="text-center mb-4">
          <p className="font-bold">Là dòng sản phẩm cao cấp hỗ trợ chăm sóc sức khỏe làn da, HOSHI mang đến giải pháp làm đẹp an toàn và hiệu quả cho làn da phụ nữ trên toàn Thế giới.</p>
        </div>
        <div>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            navigation
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            modules={[Navigation, Pagination]}
            className='flex justify-center'
          >
            {data.map(product => (
              <SwiperSlide
                key={product.id}
                className='w-full pb-6 cursor-pointer group'
              >
                <NavLink href={`/san-pham/${product.slug}`}>
                  <div className="overflow-hidden">
                    <Image src={product.images[0].imageUrl} alt={product.name} width={1024} height={716} className='w-full md:w-[300px] group-hover:scale-110 duration-500' />
                  </div>
                  <div className='py-2'>
                    <p className='text-base font-bold text-[#f18017] uppercase'>{product.name}</p>
                    <p className="text-lg">{formatCurrency(product.price, 0)} đ</p>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Products