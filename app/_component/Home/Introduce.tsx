import React from 'react'

function Introduce() {
  return (
    <section className="m-auto mt-[-1px] w-full bg-[url('/banner-02.png')] bg-cover py-[10%] min-h-[30px] text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
      <div className='absolute inset-0'>
        <div className="w-full h-full animate-sparke duration-300" />
      </div>
      <div className="flex flex-col justify-center items-center h-full max-w-6xl m-auto relative max-lg:px-4">
        <div className="py-2">
          <h2 className="text-4xl font-bold">UNA Mộc Đơn</h2>
        </div>
        <div className="text-center text-xl">
          <p>Với sứ mệnh chăm sóc sức khỏe và nâng cao chất lượng cuộc sống, Mộc Đơn đã, đang và sẽ luôn là người bạn đồng hành đáng tin cậy, giúp chị em phụ nữ vượt qua nỗi lo về U XƠ, U NANG, U LÀNH TÍNH và sống trọn vẹn hơn mỗi ngày. Hàng triệu chị em phụ nữ đã trải nghiệm và hài lòng.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduce