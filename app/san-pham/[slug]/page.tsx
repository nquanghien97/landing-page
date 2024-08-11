import ImageDetailsProduct from '@/app/_component/ImageDetailsProduct'
import { HandbookData } from '@/entities/Handbooks'
import { DataProducts, ProductEntity } from '@/entities/Products'
import { getHandbooks } from '@/services/handbooks'
import { getProduct } from '@/services/products'
import { formatCurrency } from '@/utils/currency'
import Image from 'next/image'

async function ProductDetails({ params }: { params: { slug: string } }) {

  const { data } = await getProduct(params.slug) as { data: DataProducts }
  const { data: dataHanbooks } = await getHandbooks({ page: 1, pageSize: 5 }) as { data : HandbookData[] }

  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 border-b-[1px] border-[#ccc]">
        <div className="flex">
          <div className="max-w-[50%]">
            <ImageDetailsProduct data={data.images} />
          </div>
          <div className="px-8 flex-1">
            <div className="mb-2">
              <h2 className="text-3xl">{data.name}</h2>
            </div>
            <div className="bg-[#0000001a] h-[3px] max-w-[30px] my-4" />
            <div className="mb-2">
              <span className="text-2xl font-extrabold">{formatCurrency(data.price, 0)} đ</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} className="my-4 font-bold description" />
            <div className="flex gap-4">
              <input type='number' defaultValue={1} className='border-2 border-black rounded-md p-2 max-w-[60px]' min={1} />
              <div className="my-4 w-full">
                <span
                  className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-4 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white"
                >
                  Thêm vào giỏ hàng
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[16.666667%]">
            <div>
              <h3 className="uppercase text-xl mb-4">Cẩm nang</h3>
            </div>
            <ul>
              {dataHanbooks.map(handbook => (
                <li key={handbook.id} className="flex gap-2 cursor-pointer py-1 border-b-[1px] border-[#ccc]">
                  <div className="py-2">
                    <Image src={handbook.imageUrl} alt={handbook.title} width={100} height={100} className="w-[40px]" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-bold text-[#f18017]">{handbook.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="py-2">
          <p className="uppercase font-bold">Mô tả</p>
        </div>
        <div className="py-2 font-bold" dangerouslySetInnerHTML={{ __html: data.details }} />
      </div>
    </div>
  )
}

export default ProductDetails