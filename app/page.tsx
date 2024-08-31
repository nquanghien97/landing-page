import Image from "next/image";
import Feedback from "./_component/Home/Feedback";
import Products from "./_component/Home/Products";
import { getProducts } from "@/services/products";
import { getFeedbacks } from "@/services/feedbacks";
import Signatures from "./_component/Home/Signature";
import StoryImage1 from '@/assets/images/story/story-1.jpg';
import StoryImage2 from '@/assets/images/story/story-2.jpg'
import { getHandbooks } from "@/services/handbooks";
import Handbook from "./_component/Home/Handbook";
import Banner from "./_component/Home/Banner";
import { listBaoChi, listTruyenHinh } from "@/config/ListImage";
import Introduce from "./_component/Home/Introduce";

export default async function Home() {
  const resProduct = await getProducts({ page: 1, pageSize: 10 })
  const resFeedback = await getFeedbacks({ page: 1, pageSize: 10 })
  const resHandbook = await getHandbooks({ page: 1, pageSize: 20 })

  return (
    <>
      <Banner />
      <Feedback listFeedback={resFeedback.data} />
      <Products data={resProduct.data} />
      <Signatures />
      <section className="py-7">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 overflow-hidden">
            <Image src={StoryImage1} alt="hinh-anh-cau-chuyen-thanh-cong-3" className="hover:scale-105 duration-500" />
          </div>
          <div className="flex-1 bg-[#f18017] flex items-center justify-center flex-col">
            <div className="w-5/6 text-white">
              <h2 className="text-4xl py-4">UNA Mộc Đơn – CÂU CHUYỆN THÀNH CÔNG</h2>
              <p className="font-bold text-justify">Theo thống kê trên tổng dân số nữ của thế giới, có khoảng 70 – 80% dân số nữ sẽ mắc phải một những căn bệnh U XƠ, U NANG hay U LÀNH TÍNH. Do đó, với mong muốn chăm sóc sức khỏe và nâng cao chất lượng cuộc sống của phụ nữ trên toàn thế giới, chúng tôi đã tạo ra bộ sản phẩm MỘC ĐƠN với cơ chế độc quyền: TRIỆT CHÂN U. Cơ chế này tác động trực tiếp vào chân U, đánh bật gốc rễ khối u và hoàn toàn không lo khối u mọc lại. Đây là điểm khác biệt của MỘC ĐƠN với các sản phẩm thông thường khác trên thị trường.</p>
              {/* <div className="my-4 flex justify-center">
                <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 bg-white text-black font-bold rounded-md">Xem thêm</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-[#f18017] flex items-center justify-center flex-col">
            <div className="w-5/6 text-white max-md:mb-4">
              <h2 className="text-4xl py-4">CỘNG ĐỒNG UNA Mộc Đơn</h2>
              <p className="font-bold text-justify">Không chỉ phủ mạnh thị trường trong nước, MỘC ĐƠN đã, đang và sẽ tiếp tục vươn mình mạnh mẽ ra thị trường quốc tế, nhận được nhiều sự yêu mến và tin dùng của phụ nữ trên nhiều quốc gia ở Châu Âu, Châu Á. MỘC ĐƠN đang từng bước gây dựng nên một cộng đồng chăm sóc sức khỏe phụ nữ văn minh, an toàn và hiệu quả.</p>
              {/* <div className="my-4 flex justify-center">
                <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 bg-white text-black font-bold rounded-md">Xem thêm</span>
              </div> */}
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <Image src={StoryImage2} alt="hinh-anh-cong-dong-3" className="hover:scale-105 duration-500" />
          </div>
        </div>
      </section>
      <Handbook data={resHandbook.data} />
      <Introduce />
      <section className="py-7">
        <div className="max-w-6xl m-auto flex flex-col">
          <h1 className="flex items-center justify-between relavive w-full mb-6">
            <b className="bg-[black] flex-1 h-[2px] opacity-10" />
            <span className="text-center mx-4 text-3xl uppercase">Những con số biết nói</span>
            <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          </h1>
          <div className="flex flex-col md:flex-row max-md:gap-4">
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="mb-4">
                <span className="text-[#f18017] font-extrabold text-5xl">3</span>
              </div>
              <div>
                <span className="uppercase font-bold">Năm hoạt động</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="mb-4">
                <span className="text-[#f18017] font-extrabold text-5xl">50+</span>
              </div>
              <div>
                <span className="uppercase font-bold">ĐẠI LÝ TRÊN TOÀN THẾ GIỚI</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="mb-4">
                <span className="text-[#f18017] font-extrabold text-5xl">100,000+</span>
              </div>
              <div>
                <span className="uppercase font-bold">KHÁCH HÀNG TIN DÙNG</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="mb-4">
                <span className="text-[#f18017] font-extrabold text-5xl">20+</span>
              </div>
              <div>
                <span className="uppercase font-bold">BÁO ĐÀI ĐƯA TIN</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="max-w-6xl m-auto flex flex-col">
          <div className="mb-4">
            <div className="flex justify-center">
              <h1 className="flex items-center justify-between relavive w-full mb-6">
                <b className="bg-[black] flex-1 h-[2px] opacity-10" />
                <span className="text-center mx-4 text-3xl uppercase">Báo chí</span>
                <b className="bg-[black] flex-1 h-[2px] opacity-10" />
              </h1>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {listBaoChi.map(item => (
                <div key={item.key} className="flex justify-center items-center">
                  <Image src={item.src} alt={item.title} width={120} height={100} className="max-w-[165px]" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-center">
              <h1 className="flex items-center justify-between relavive w-full mb-6">
                <b className="bg-[black] flex-1 h-[2px] opacity-10" />
                <span className="text-center mx-4 text-3xl uppercase">Truyền hình</span>
                <b className="bg-[black] flex-1 h-[2px] opacity-10" />
              </h1>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {listTruyenHinh.map(item => (
                <div key={item.key} className="flex justify-center items-center">
                  <Image src={item.src} alt={item.title} width={120} height={100} className="max-w-[165px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
