import { DataProducts, ProductEntity } from '@/entities/Products'
import { formatCurrency } from '@/utils/currency';
import { removeVietnameseTones } from '@/utils/removeVietnameseTones';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchResultProps {
  data: DataProducts[]
  dataProductsRef: React.RefObject<HTMLDivElement>
  setOpenDataSearch: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchResult(props: SearchResultProps) {
  const { data, dataProductsRef, setOpenDataSearch } = props;
  const router = useRouter();
  return (
    <div className="absolute top-[100%] min-w-[500px]" ref={dataProductsRef}>
      <div className="border-2 border-[#ccc] p-2 bg-white rounded-md">
        {data.map((product) => (
          <div
            key={product.id}
            className="mb-4 text-black flex cursor-pointer hover:text-[#f18017] duration-300"
            onClick={() => {
              router.push(removeVietnameseTones(product.name))
              setOpenDataSearch(false)
            }}
          >
            <Image src={product.images[0].imageUrl} alt={product.name} width={100} height={100} className="w-[80px]" />
            <div className="max-w-[70%] basis-[70%]">
              <h3 className="text-sm mx-2">{product.name}</h3>
            </div>
            <p className="max-w-[30%] basis-[30%] text-end">{formatCurrency(product.price, 0)} đ</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult