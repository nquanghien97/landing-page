import ImageDetailsProduct from '@/app/_component/ImageDetailsProduct'
import { ProductEntity } from '@/entities/Products'
import { getProduct } from '@/services/products'
import Image from 'next/image'

async function ProductDetails({ params } : { params: { slug: string }}) {

  const data: ProductEntity = await getProduct(params.slug)
  console.log(data.images)
  return (
    <div>
      <div>
        {/* <ImageDetailsProduct data={data.images} /> */}
      </div>
    </div>
  )
}

export default ProductDetails