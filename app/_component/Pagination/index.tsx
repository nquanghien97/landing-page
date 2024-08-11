'use client'
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  total: number;
  initialPage: number
}

function Pagination(props: PaginationProps) {

  const { total, initialPage } = props;

  const router = useRouter()

  const handlePageClick = (e: { selected: number }) => {
    router.push(`?page=${e.selected + 1}`)
  }
  
  return (
    <ReactPaginate
      pageCount={total}
      initialPage={initialPage}
      nextLabel=">"
      previousLabel="<"
      className="flex gap-2 items-center"
      nextLinkClassName	="border-[1px] rounded-full text-sm p-4 h-3 w-3 flex items-center justify-center hover:bg-[#f18017] duration-300"
      previousLinkClassName="border-[1px] rounded-full text-sm p-4 h-3 w-3 flex items-center justify-center hover:bg-[#f18017] duration-300"
      onPageChange={handlePageClick}
      activeClassName="bg-[#f18017] rounded-full text-white active-pagination"
      pageLinkClassName="border-[1px] rounded-full text-sm p-4 h-3 w-3 flex items-center justify-center hover:bg-[#f18017] duration-300"
    />
  )
}

export default Pagination