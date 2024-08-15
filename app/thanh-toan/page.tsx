'use client';

import React, { FormEvent, useState } from 'react'
import BaseInput from '../_component/common/BaseInput'
import { useProductsStore } from '@/zustand/products';
import { formatCurrency } from '@/utils/currency';
import { METHODS } from 'http';

interface FormValues {
  'Họ tên'?: string,
  'Địa chỉ'?: string,
  'Thành phố'?: string,
  'Số điện thoại'?: string,
  'Thông tin thêm'?: string,
}

function ChekOut() {

  const [values, setValues] = useState<FormValues>({
    'Họ tên': 'name',
    'Địa chỉ': 'address',
    'Thành phố': 'province',
    'Số điện thoại': 'phoneNumber',
    'Thông tin thêm': 'description',
  })

  const { products, getTotalPrice } = useProductsStore();
  const product = products.map(item => `${item.name} x ${item.quantity} x ${formatCurrency(item.price, 0)} đ`)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('Thông tin sản phẩm', product.toString())
    const newValues = {
      'Họ tên': formData.get('Họ tên')?.toString() || '',
      'Địa chỉ': formData.get('Địa chỉ')?.toString() || '',
      'Thành phố': formData.get('Thành phố')?.toString() || '',
      'Số điện thoại': formData.get('Số điện thoại')?.toString() || '',
      'Thông tin thêm': formData.get('Thông tin thêm')?.toString() || '',
    };
    setValues(newValues);

    if ([newValues['Họ tên'], newValues['Địa chỉ'], newValues['Thành phố'], newValues['Số điện thoại']].every(value => value)) {
      await fetch("https://script.google.com/macros/s/AKfycbz_t9YpJqb3cn1MrEVp_vKUE-ChV2ny_kH5REg8A0zd7bDiwegRBoXt92B_NPy4F6I/exec",
        {
          method: "POST",
          body: formData,
          mode: 'no-cors'
        }
      )
    }
  }
  console.log(values['Họ tên'])

  return (
    <div className="max-w-6xl m-auto mb-4">
      <form onSubmit={onSubmit}>
        <div className="py-10 flex max-md:flex-col max-md:px-4">
          <div className="md:max-w-[60%] w-full md:basis-60% p-4">
            <div>
              <h2 className="text-2xl font-bold">Thông tin thanh toán</h2>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="w-full">
                  <p className="py-2 font-bold">Họ tên <span className="text-red-500">*</span></p>
                  <BaseInput name="Họ tên" />
                  {!values['Họ tên'] && <p className="text-red-500">Trường này là bắt buộc</p>}
                </div>
              </div>
              <div className="">
                <p className="py-2 font-bold">Địa chỉ <span className="text-red-500">*</span></p>
                <BaseInput name="Địa chỉ" />
                {!values['Địa chỉ'] && <p className="text-red-500">Trường này là bắt buộc</p>}
              </div>
              <div className="">
                <p className="py-2 font-bold">Tỉnh / Thành phố <span className="text-red-500">*</span></p>
                <BaseInput name="Thành phố" />
                {!values['Thành phố'] && <p className="text-red-500">Trường này là bắt buộc</p>}
              </div>
              <div className="">
                <p className="py-2 font-bold">Số điện thoại <span className="text-red-500">*</span></p>
                <BaseInput name="Số điện thoại" />
                {!values['Số điện thoại'] && <p className="text-red-500">Trường này là bắt buộc</p>}
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold">Thông tin bổ sung</h2>
                <p>Ghi chú đơn hàng (tùy chọn)</p>
                <textarea rows={5} name="Thông tin thêm" className="outline-0 rounded-lg w-full hover:transition-all duration-300 text-black bg-[#eaecf0] px-4 py-2" />
              </div>
            </div>
          </div>
          <div className="md:max-w-[40%] md:basis-[40%] p-4 border-2 border-[#f18017] rounded-md">
            <div>
              <h2 className="text-2xl font-bold">Đơn hàng của bạn</h2>
            </div>
            <table>
            <thead>
              <tr className="flex border-b-2">
                <th className="max-w-[70%] lg:max-w-[40%] basis-[70%] lg:basis-2/5 text-start">Sản phẩm</th>
                <th className="max-w-[40%] basis-2/5 mx-2 text-end">Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-2xl">Chưa có sản phẩm nào trong giỏ hàng</td>
                </tr>
              ) : (
                products.map(product => (
                  <tr key={product.id} className="flex py-2">
                    <td className="max-w-[60%] lg:max-w-[40%] basis-[60%] lg:basis-2/5 font-bold flex justify-start !px-0">
                      <div className="flex flex-col">
                        <span className="flex-1 text-base">{product.name} x {product.quantity}</span>
                      </div>
                    </td>
                    <td className="max-w-[40%] basis-[40%] mx-2 font-bold text-end">{formatCurrency(product.price * product.quantity, 0)} đ</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr className="flex py-1 border-t-2">
                <td className="max-w-[60%] lg:max-w-[40%] basis-[60%] lg:basis-2/5 font-bold flex justify-start !px-0">Tạm tính</td>
                <td className="max-w-[40%] basis-[40%] mx-2 font-bold text-end">{formatCurrency(getTotalPrice(), 0)} đ</td>
              </tr>
            </tfoot>
          </table>
            <div className="my-4 w-full">
              <button type='submit' className="w-full cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white">Đặt hàng ngay</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChekOut