import Image from 'next/image'
import Pagination from '../_component/Pagination'
import RightSidebar from '../_component/RightSidebar'
import { getFeedbacks } from '@/services/feedbacks'
import { FeedbackEntity } from '@/entities/Feedback'
import Link from 'next/link'

async function KhachHang({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const dataFeedback: FeedbackEntity = await getFeedbacks({ page: searchParams.page ? +searchParams.page : 1, pageSize: 2 })

  return (
    <div className="max-w-6xl m-auto mb-4">
      <div className="py-10 flex flex-col md:flex-row">
        <div className="px-4 border-r-[1px] border-[#ccc] md:max-w-[75%] md:basis-3/4 w-full flex flex-col gap-4 my-4 md:m-0">
          {dataFeedback.data.map(feedback => (
            <Link key={feedback.id} className="flex group cursor-pointer flex-col md:flex-row" href={`/khach-hang/${feedback.slug}`}>
              <div className="md:w-2/5 w-full">
                <Image src={feedback.imageUrl} alt={feedback.title} width={100} height={100} className=" w-full" />
              </div>
              <div className="flex flex-col justify-center md:px-4 py-4 md:w-3/5">
                <p>{feedback.title}</p>
                <div className="bg-[#0000001a] h-[3px] max-w-[30px] md:mb-4 my-2" />
                <div className="group-hover:text-[#f18017] duration-300">
                  <span className="font-bold">[...]</span>
                </div>
              </div>
            </Link>
          ))}
          <div className="md:mt-4">
            <Pagination total={Math.ceil(dataFeedback.paging.total / dataFeedback.paging.pageSize)} initialPage={searchParams.page ? +searchParams.page - 1 : 0} />
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default KhachHang