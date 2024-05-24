import React, { FormEvent } from 'react'

function AppFooter() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const firstInput = formElement.elements[0];

    if (firstInput instanceof HTMLInputElement) {
      console.log(firstInput.value);
    }
  }

  return (
    <footer>
      <section className="bg-[#aaaaaa] py-7">
        <div className="flex max-w-6xl m-auto text-white max-md:flex-col px-4">
          <div className="flex md:basis-1/4 flex-col md:max-w-[25%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold">LIÊN HỆ</h4>
            <ul className="list-disc">
              <li className="py-1">Địa chỉ</li>
              <li className="py-1">Hotline</li>
              <li className="py-1">Email</li>
              <li className="py-1">Địa chỉ nhà máy</li>
            </ul>
          </div>
          <div className="flex md:basis-1/4 flex-col md:max-w-[25%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="list-disc">
              <li className="py-1">Chính sách và quy định</li>
              <li className="py-1">Chính sách bảo mật thông tin</li>
              <li className="py-1">Tuyển dụng</li>
            </ul>
            <div className="py-1">
              <h4 className="mb-2 font-bold uppercase">Nhận thông tin từ chúng tôi</h4>
              <form className="flex" onSubmit={handleSubmit}>
                <input className="w-[60%] p-2 text-black" />
                <button type="submit" className="w-[40%] bg-black">GỬI ĐI</button>
              </form>
            </div>
          </div>
          <div className="flex md:basis-1/4 flex-col md:max-w-[25%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold">LIÊN KẾT</h4>
            <ul className="list-disc">
              <li className="py-1">Thiết kế nội thất</li>
              <li className="py-1">Thi công nội thất</li>
              <li className="py-1">Nội thất cao cấp</li>
            </ul>
          </div>
          <div className="flex md:basis-1/4 flex-col md:max-w-[25%] max-md:my-2 px-4">
            <h4 className="mb-2 font-bold">FACEBOOK</h4>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmamvietnam6868&amp;tabs=timeline&amp;width=340&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1513842462264110" width="340" height="130" className="overflow-hidden max-w-full" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <h4 className="mb-2 font-bold">GOOGLE MAPS</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10685.400601260613!2d105.7177762615044!3d18.75980678301708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139d309be3ccc49%3A0x3838aac3225d1e12!2zTmdoaSBIb8OgLCBD4butYSBMw7IsIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1716370143625!5m2!1svi!2s" className="max-w-full" width="600" height="150" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <div className="text-center bg-[#777777] py-4">
        <p>© 2022 - Nội thất MAM Design</p>
      </div>
    </footer>
  )
}

export default AppFooter