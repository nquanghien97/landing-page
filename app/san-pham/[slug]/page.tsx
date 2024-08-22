import ImageDetailsProduct from '@/app/_component/ImageDetailsProduct'
import { HandbookData } from '@/entities/Handbooks'
import { DataProducts, ProductEntity } from '@/entities/Products'
import { getHandbooks } from '@/services/handbooks'
import { getProduct } from '@/services/products'
import { formatCurrency } from '@/utils/currency'
import Image from 'next/image'
import AddCart from './AddCart'
async function ProductDetails({ params }: { params: { slug: string } }) {

  const { data } = await getProduct(params.slug) as { data: DataProducts }
  const { data: dataHanbooks } = await getHandbooks({ page: 1, pageSize: 5 }) as { data : HandbookData[] }

  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 border-b-[1px] border-[#ccc]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:max-w-[40%]">
            <ImageDetailsProduct data={data.images} />
          </div>
          <div className="px-4 ml-4 flex-1">
            <div className="mb-2 max-md:mt-4">
              <h2 className="md:text-3xl text-2xl font-bold">{data.name}</h2>
            </div>
            <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:my-4" />
            <div className="mb-2">
              <span className="text-2xl font-extrabold">{formatCurrency(data.price, 0)} đ</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} className="my-4 font-bold description content" />
            <AddCart product={data} />
          </div>
          <div className="w-full max-w-[16.666667%] hidden md:block">
            <div>
              <h3 className="uppercase text-xl mb-4">Cẩm nang</h3>
            </div>
            <ul>
              {dataHanbooks.map(handbook => (
                <li key={handbook.id} className="flex gap-2 cursor-pointer py-1 border-b-[1px] border-[#ccc]">
                  <div className="py-2">
                    <Image src={`/api${handbook.imageUrl}`} alt={handbook.title} width={100} height={100} className="w-[40px]" />
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
      <div className="max-md:px-4">
        <div className="py-2">
          <p className="uppercase font-bold">Mô tả</p>
        </div>
        <div className="py-2 font-bold content" dangerouslySetInnerHTML={{ __html: data.details }} />
      </div>
    </div>
  )
}

export default ProductDetails