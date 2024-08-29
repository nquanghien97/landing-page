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
          <p>MỘC ĐƠN - Bí quyết từ thiên nhiên dành riêng cho phụ nữ! Được tạo nên từ những thảo dược tinh túy nhất, MỘC ĐƠN giúp bạn nhẹ nhàng đánh bay nỗi lo U XƠ, U NANG hay U LÀNH TÍNH, mang lại sự cân bằng và khỏe mạnh từ bên trong. MỘC ĐƠN cam kết đồng hành cùng phụ nữ trên con đường chăm sóc sức khỏe, để mỗi ngày đều là một ngày tự tin, rạng ngời và tràn đầy sức sống.</p>
        </div>
      </div>
    </section>
  )
}

export default Introduce