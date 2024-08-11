import { DataProducts } from '@/entities/Products'
import { getProducts } from '@/services/products'
import { formatCurrency } from '@/utils/currency'
import Image from 'next/image'
import Link from 'next/link'
import Filter from './Filter'

async function Service({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const { data } = await getProducts({ page: 1, pageSize: 8, orderby: searchParams.orderby }) as { data: DataProducts[] }
  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 flex flex-col">
        <div className="px-2 mb-4 flex justify-between">
          <div className="flex">
            <Link href="/">Trang chủ</Link>
            <span className="px-2">/</span>
            <p className="font-bold">Cửa hàng</p>
          </div>
          <div className="max-w-[]">
            <Filter />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {data.map(product => (
            <div className="flex flex-col items-center max-w-[25%] basis-1/4 px-2 pb-4" key={product.id}>
              <Link href={`/san-pham/${product.slug}`} className="overflow-hidden cursor-pointer">
                <Image src={product.images[0].imageUrl} alt={product.name} width={100} height={100} className="w-full hover:scale-110 duration-500" />
              </Link>
              <div className="py-2 text-center">
                <Link href={`/san-pham/${product.slug}`} className="text-sm text-[#f18017] font-bold">{product.name}</Link>
                <p className="">{formatCurrency(product.price, 0)} đ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service