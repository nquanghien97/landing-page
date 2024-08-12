'use client'

import { DataProducts } from '@/entities/Products'
import { useProductsStore } from '@/zustand/products'
import React, { useState } from 'react'

interface AddCartProps {
  product: DataProducts
}
function AddCart(props: AddCartProps) {
  const { product } = props
  const [quantity, setQuantity] = useState(1);
  const { addProducts } = useProductsStore()
  return (
    <div className="flex gap-4">
      <input type='number' defaultValue={1} onChange={e => setQuantity(+e.target.value)} className='border-2 border-black rounded-md p-2 max-w-[60px]' min={1} />
      <div className="my-4 w-full" onClick={() => addProducts(product, quantity)}>
        <span
          className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-4 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
        >
          Thêm vào giỏ hàng
        </span>
      </div>
    </div>
  )
}

export default AddCart