'use client'

import { DataProducts } from '@/entities/Products';
import { formatCurrency } from '@/utils/currency';
import { useProductsStore } from '@/zustand/products';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import NavLink from '../_component/NavLink';

function CartPage() {

  const { products, getTotalPrice, updateCart } = useProductsStore();

  const router = useRouter();

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>, product: DataProducts) => {
    updateCart(product, +e.target.value);
  };

  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 flex flex-col lg:flex-row">
        {products.length === 0 ? (
          <div className="w-full">
            <p className="font-bold mb-8 text-2xl">Chưa có sản phẩm nào trong giỏ hàng</p>
            <div className="my-4 w-full flex justify-center" onClick={() => router.push('/san-pham')}>
              <span
                className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-4 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
              >
                Quay lại cửa hàng
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col cart lg:max-w-[60%] basis-3/5 px-4 lg:border-r-[1px]">
              <table>
                <thead>
                  <tr className="flex border-b-2">
                    <th className="max-w-[70%] lg:max-w-[40%] basis-[70%] lg:basis-2/5 mx-2">Sản phẩm</th>
                    <th className="max-w-[20%] basis-1/5 mx-2 max-lg:hidden">Giá</th>
                    <th className="max-w-[20%] basis-1/5 mx-2">Số lượng</th>
                    <th className="max-w-[20%] basis-1/5 mx-2 max-lg:hidden">Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-2xl">Chưa có sản phẩm nào trong giỏ hàng</td>
                    </tr>
                  ) : (
                    products.map(product => (
                      <tr key={product.id} className="flex">
                        <td className="max-w-[70%] lg:max-w-[40%] basis-[70%] lg:basis-2/5 mx-2 font-bold flex">
                          <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.images[0].imageUrl}`} alt={product.name} width={100} height={100} />
                          <div className="ml-2 flex flex-col">
                            <span className="flex-1">{product.name}</span>
                            <span className="lg:hidden">{product.quantity} x {formatCurrency(product.price, 0)} đ</span>
                          </div>
                        </td>
                        <td className="max-w-[20%] basis-1/5 mx-2 max-lg:hidden font-bold !py-5">{formatCurrency(product.price, 0)} đ</td>
                        <td className="max-w-[20%] basis-1/5 mx-2 text-center font-bold">
                          <input
                            type='number'
                            defaultValue={product.quantity}
                            onChange={(e) => handleChangeQuantity(e, product)}
                            className='border-2 border-black rounded-md p-2 max-w-[60px]'
                            min={1}
                          />
                        </td>
                        <td className="max-w-[20%] basis-1/5 mx-2 max-lg:hidden font-bold !py-5">{formatCurrency(product.price * product.quantity, 0)} đ</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="my-4 w-full" onClick={() => router.push('/san-pham')}>
                <span
                  className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-4 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
                >
                  Tiếp tục xem sản phẩm
                </span>
              </div>
            </div>
            <div className="lg:max-w-[40%] basis-2/5 max-lg:p-3 lg:px-3">
              <div className="border-b-2">
                <h2 className="text-xl font-bold">Cộng giỏ hàng</h2>
              </div>
              <div className="py-2">
                <div className="flex justify-between py-2">
                  <p>Tạm tính</p>
                  <p>{formatCurrency(getTotalPrice(), 0)} đ</p>
                </div>
                <div className="flex justify-between w-full py-2">
                  <p>Tổng</p>
                  <p>{formatCurrency(getTotalPrice(), 0)} đ</p>
                </div>
                <div className="my-4 w-full">
                  <Link href="/thanh-toan">
                    <span
                      className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-4 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
                    >
                      Tiến hành thanh toán
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
