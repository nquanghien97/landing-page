import MinusIcon from '@/assets/icons/MinusIcon';
import { DataProducts } from '@/entities/Products'
import { formatCurrency } from '@/utils/currency';
import { useProductsStore } from '@/zustand/products';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavLink from './NavLink';

interface DataCart extends DataProducts {
  quantity: number
}

interface DataCartProps {
  products: DataCart[]
  dataCartRef: React.RefObject<HTMLDivElement>
}

function DataCart(props: DataCartProps) {
  const { products, dataCartRef } = props;

  const router = useRouter();

  const { removeProduct, getTotalPrice } = useProductsStore()

  return (
    <div className="absolute top-[100%] right-[30%] bg-[white] p-4 shadow-2xl rounded-md w-[260px]" ref={dataCartRef}>
      {products.length === 0 ? (
        <p className="text-black font-bold text-center">Chưa có sản phẩm nào trong giỏ hàng</p>
      ) : (
        <>
          <div className="pb-4 border-b-[1px]">
        <div className="flex flex-col gap-4">
          {products.map(product => (
            <div key={product.id} className="flex">
              <div className="max-w-[40%] w-full pr-4">
                <Image src={`/api${product.images[0].imageUrl}`} alt={product.name} width={100} height={100} className="w-full" />
              </div>
              <div className="max-w-[60%] text-xs text-black flex flex-col">
                <p className="text-[#f18017] font-bold">{product.name}</p>
                <p className="flex-1 flex items-end">{product.quantity} x {formatCurrency(product.price, 0)}</p>
              </div>
              <div className="ml-2 cursor-pointer" onClick={() => removeProduct(product.id)}>
                <div className="p-1 bg-[#f0efef] rounded-full hover:opacity-70">
                  <MinusIcon width={12} height={12} color='red' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 border-b-[1px]">
        <span className="text-black font-bold">Tổng số tiền: {formatCurrency(getTotalPrice(), 0)} đ</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex" onClick={() => router.push('/gio-hang')}>
          <span
            className="w-full text-center cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
          >
            Xem giỏ hàng
          </span>
        </div>
        <div className="flex w-full my-2">
          <NavLink href='/thanh-toan' className="w-full">
            <p
              className="w-full text-center cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
            >
              Thanh toán
            </p>
          </NavLink>
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default DataCart