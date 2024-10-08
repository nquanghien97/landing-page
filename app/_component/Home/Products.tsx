'use client'

import Image from 'next/image';
import { DataProducts, ProductEntity } from '@/entities/Products';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { formatCurrency } from '@/utils/currency';
import NavLink from '../NavLink';
import Link from 'next/link';

interface ProductProps {
  data: DataProducts[]
}

function Products(props: ProductProps) {

  const { data } = props;

  return (
    <section className="md:py-7 max-md:px-4">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Sản phẩm</h2>
        </div>
        <h1 className="flex items-center justify-between relavive w-full mb-6">
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          <span className="text-center mx-4 text-3xl">UNA Mộc Đơn<br />khuyên dùng</span>
          <b className="bg-[black] flex-1 h-[2px] opacity-10" />
        </h1>
        <div className="text-center mb-4">
          <p className="font-bold">Là bộ sản phẩm cao cấp điều trị U XƠ, U NANG, U LÀNH TÍNH. MỘC ĐƠN mang đến giải pháp an toàn tuyệt đối và hiệu quả vượt trội cho sức khỏe phụ nữ trên toàn Thế giới.</p>
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
                spaceBetween: 40,
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
                <Link href={`/san-pham/${product.slug}`}>
                  <div className="overflow-hidden">
                    <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].imageUrl}`} alt={product.name} width={1024} height={716} className='w-full md:w-[360px] group-hover:scale-110 duration-500' />
                  </div>
                  <div className='py-2'>
                    <p className='text-base font-bold text-[#f18017] uppercase'>{product.name}</p>
                    {product.discountPrice ? (
                      <>
                        <p className="text-lg font-bold">Giá gốc: <span className="line-through">{formatCurrency(product.price, 0)} đ</span></p>
                        <p className="text-lg font-bold">Ưu đãi hôm nay: <span className="text-[#f18017]">{formatCurrency(product.discountPrice, 0)} đ</span></p>
                      </>
                    ) : (
                      <p className="text-lg font-bold"><span>{formatCurrency(product.price, 0)} đ</span></p>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Products