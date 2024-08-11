import Image from 'next/image'
import RightSidebar from '@/app/_component/RightSidebar'
import { HandbookData } from '@/entities/Handbooks'
import { getHandbook } from '@/services/handbooks'
import { formatDate } from '@/utils/date'
import Link from 'next/link'

async function Details({ params }: { params: { slug: string } }) {
  const { data } = await getHandbook(params.slug) as { data : HandbookData}
  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 flex flex-col md:flex-row">
        <div className="px-4 border-r-[1px] border-[#ccc] md:max-w-[75%] md:basis-3/4 w-full flex flex-col gap-4 my-4 md:m-0">
          <Link href="/cam-nang" className="uppercase text-[#f18017]">Cẩm nang</Link>
          <div>
            <h1 className="text-3xl font-bold">{data.title}</h1>
          </div>
          <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:mb-2" />
          <div>
            <span className="font-bold">Được thêm vào {formatDate(data.createdAt)} bởi ADMIN</span>
          </div>
          <div>
            <Image src={data.imageUrl} alt={data.title} width={100} height={100} className="w-full" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content}} />
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Details