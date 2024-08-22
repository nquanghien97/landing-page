import { HandbookEntity } from "@/entities/Handbooks"
import { ProductEntity } from "@/entities/Products"
import { getHandbooks } from "@/services/handbooks"
import { getProducts } from "@/services/products"
import { formatCurrency } from "@/utils/currency"
import Image from "next/image"
import Image1 from "@/assets/images/right-banner/anh-doc-1.jpg";
import Image2 from "@/assets/images/right-banner/anh-doc-2.jpg";

async function RightSidebar() {
  const dataProducts: ProductEntity = await getProducts({ page: 1, pageSize: 3 })
  const dataHandbooks: HandbookEntity = await getHandbooks({ page: 1, pageSize: 3 })
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-[25%] md:basis-1/4 my-4 md:m-0">
      <div className="px-4 w-full md:mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <div className="w-full">
            <Image src={Image1} alt="Ảnh dọc 1" width={100} height={100} className="w-full" unoptimized />
          </div>
          <div className="w-full">
            <Image src={Image2} alt="Ảnh dọc 2" width={100} height={100} className="w-full" unoptimized />
          </div>
        </div>
        <div>
          <div>
            <h3 className="uppercase text-xl font-bold">Cẩm nang</h3>
          </div>
          <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:mb-4 my-2" />
          <ul>
            {dataHandbooks.data.map(handbook => (
              <li key={handbook.id} className="flex gap-2 cursor-pointer py-1 border-b-[1px] border-[#ccc]">
                <div className="py-2">
                  <Image src={`/api${handbook.imageUrl}`} alt={handbook.title} width={100} height={100} className="w-[80px]" />
                </div>
                <div className="w-full flex items-center">
                  <p className="text-sm font-bold text-[#f18017]">{handbook.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4 w-full">
        <div>
          <div>
            <h3 className="uppercase text-xl font-bold">Sản phẩm</h3>
          </div>
          <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:mb-4 my-2" />
          <ul>
            {dataProducts.data.map(product => (
              <li key={product.id} className="flex gap-2 cursor-pointer py-1 border-b-[1px] border-[#ccc]">
                <div className="py-2">
                  <Image src={`/api${product.images[0].imageUrl}`} alt={product.name} width={100} height={100} className="w-[80px]" />
                </div>
                <div className="w-full flex justify-center flex-col">
                  <p className="text-sm font-bold text-[#f18017]">{product.name}</p>
                  <p className="text-sm font-bold">{formatCurrency(product.price, 0)} đ</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar