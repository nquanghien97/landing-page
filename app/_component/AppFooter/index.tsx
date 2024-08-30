import React from 'react'
import FormFooter from './FormFooter'
import Link from 'next/link';
import Image from 'next/image';

function AppFooter() {

  return (
    <footer>
      <section className="py-7 bg-[url('/bg-header.png')] bg-cover">
        <div className="flex max-w-6xl m-auto text-white max-md:flex-col px-4">
          <div className="flex justify-center items-center md:basis-2/5 flex-col md:max-w-[40%] max-md:my-2 px-4">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={300} height={100} />
            </Link>
          </div>
          <div className="flex md:basis-[30%] flex-col md:max-w-[30%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold">HỖ TRỢ KHÁCH HÀNG</h4>
            <div className="bg-[#ccc] h-[3px] max-w-[30px] md:mb-4 my-2" />
            <ul className="list-disc">
              <li className="py-1">Chính sách bảo mật</li>
              <li className="py-1">Chính sách vận chuyển</li>
              <li className="py-1">Chính sách đổi trả</li>
              <li className="py-1">Phương thức thanh toán</li>
            </ul>
            {/* <div className="py-1">
              <h4 className="mb-2 font-bold uppercase">Nhận thông tin từ chúng tôi</h4>
              <FormFooter />
            </div> */}
          </div>
          <div className="flex md:basis-[30%] flex-col md:max-w-[30%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold uppercase">Liên hệ với chúng tôi</h4>
            <div className="bg-[#ccc] h-[3px] max-w-[30px] md:mb-4 my-2" />
            <ul className="list-disc">
              <li>Tầng 4 tòa nhà HUD3 Tower số 121-123 Tô Hiệu, Nguyễn Trãi, Quận Hà Đông, Hà Nội, Việt Nam.</li>
              <li>Địa chỉ nhà máy: Nhà Máy BigFa, KM36 - QL6, Khu Công Nghiệp Lương Sơn, Xã Hòa Sơn, Huyện Lương Sơn, Hòa Bình, Việt Nam.</li>
              <li>Hotline: 052.854.3333</li>
              <li>Email: mocdon.una@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="text-center bg-[#326327] py-4">
        <p>Copyright 2024 © UNA Mộc Đơn</p>
      </div>
    </footer>
  )
}

export default AppFooter