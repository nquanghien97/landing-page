import { HandbookEntity } from '@/entities/Handbooks'
import { getHandbooks } from '@/services/handbooks'
import Image from 'next/image'
import Pagination from '../_component/Pagination'
import RightSidebar from '../_component/RightSidebar'
import Link from 'next/link'
import NavLink from '../_component/NavLink'
import ClientOnlyContent from './ClientContent'

export const dynamic = 'force-dynamic'
async function CamNang({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const data: HandbookEntity = await getHandbooks({ page: 1, pageSize: 20 })
  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 flex flex-col md:flex-row">
        <div className="px-4 border-r-[1px] border-[#ccc] md:max-w-[75%] md:basis-3/4 w-full flex flex-col gap-4 my-4 md:m-0">
          {data.data.map(handbook => (
            <Link href={`/cam-nang/${handbook.slug}`} key={handbook.id} className="flex group cursor-pointer flex-col md:flex-row">
              <div className="md:w-2/5 w-full relative">
                <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${handbook.imageUrl}`} alt={handbook.title} width={1000} height={1000} className="md:w-[300px] w-full" />
                <div className="absolute top-0 px-2 bg-[white] border-[#f18017] border-2 flex flex-col">
                  <span className="text-xs font-bold text-[#f18017]">{new Date(handbook.createdAt).getDate()}</span>
                  {/* <span className="text-xs font-bold text-[#f18017]">th{new Date(handbook.createdAt).getMonth()}</span> */}
                  <span className="text-xs font-bold text-[#f18017]">th{new Date(handbook.createdAt).getMonth() + 1}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center md:px-4 py-4">
                <p>{handbook.title}</p>
                <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:mb-4 my-2" />
                <ClientOnlyContent content={handbook.content} />
              </div>
            </Link>
          ))}
          {/* <div className="md:mt-4">
            <Pagination total={Math.ceil(data.paging.total / data.paging.pageSize)} initialPage={searchParams.page ? +searchParams.page - 1 : 0} />
          </div> */}
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default CamNang