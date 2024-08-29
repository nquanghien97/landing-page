import Link from "next/link";

export const ListOrders = [
  {
    id: 1,
    content: (
      <div className="ml-100 text-white">
        <Link href="/">UNA Plus</Link>
        <p>{`${Math.floor(Math.random() * 1000)} đã để lại thông tin nhờ tư vấn`}</p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="ml-100 text-white">
        <Link href="/">Combo Cốm + UNA Mộc Đơn</Link>
        <p>{`${Math.floor(Math.random() * 1000)} đã để lại thông tin nhờ tư vấn`}</p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="ml-100 text-white">
        <Link href="/">UNA Mộc Đơn</Link>
        <p>{`${Math.floor(Math.random() * 1000)} đã để lại thông tin nhờ tư vấn`}</p>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="ml-100 text-white">
        <Link href="/">Cốm Mộc Đơn</Link>
        <p>{`${Math.floor(Math.random() * 1000)} đã để lại thông tin nhờ tư vấn`}</p>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="ml-100 text-white">
        <p>Thu Huyền đã để lại thông tin nhờ tư vấn</p>
        <p>4 giờ trước</p>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className="ml-100 text-white">
        <p>Khánh Linh đã để lại thông tin nhờ tư vấn</p>
        <p>2 giờ trước</p>
      </div>
    ),
  },
  {
    id: 7,
    content: (
      <div className="ml-100 text-white">
        <p>Nguyễn Thị Huyền đã để lại thông tin nhờ tư vấn</p>
        <p>3 giờ trước</p>
      </div>
    ),
  },
  {
    id: 8,
    content: (
      <div className="ml-100 text-white">
        <p>Hoàng Khánh Linh đã để lại thông tin nhờ tư vấn</p>
        <p>1 giờ trước</p>
      </div>
    ),
  }
]