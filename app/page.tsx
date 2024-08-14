import Image from "next/image";
import CustomSlider from "./_component/CustomSlider";
import AnimatedText from "./_component/common/AnimatedText";
import Feedback from "./_component/Home/Feedback";
import Products from "./_component/Home/Products";
import { getProducts } from "@/services/products";
import { getFeedbacks } from "@/services/feedbacks";
import Signatures from "./_component/Home/Signature";
import StoryImage1 from '@/assets/images/story/hinh-anh-cau-chuyen-thanh-cong-3.jpg';
import StoryImage2 from '@/assets/images/story/hinh-anh-cong-dong-3.jpg'
import { getHandbooks } from "@/services/handbooks";
import Handbook from "./_component/Home/Handbook";
import { listImage } from "@/config/ListImage";

export default async function Home() {
  const resProduct = await getProducts({ page: 1, pageSize: 5 })
  const resFeedback = await getFeedbacks({ page: 1, pageSize: 7 })
  const resHandbook = await getHandbooks({ page: 1, pageSize: 8 })

  return (
    <>
      <section className="text-[blue] overflow-hidden m-auto">
        <CustomSlider>
          {listImage.map((item: any) => (
            <div
              key={item.src}
              className={`min-w-full h-full bg-cover bg-no-repeat bg-center-center relative`}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="bg-[#00000080] absolute inset-0 flex items-center justify-center">
                <AnimatedText
                  el="h2"
                  text={item.title}
                  className='w-[70%] text-center'
                />
              </div>
            </div>
          ))}
        </CustomSlider>
      </section>
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
              <h2 className="text-4xl py-4">HOSHI – CÂU CHUYỆN THÀNH CÔNG</h2>
              <p className="font-bold">Làn da thâm sạm với những đốm nâu, tàn nhang, đồi mồi… đã và đang khiến hàng triệu triệu phụ nữ trên toàn thế giới tự ti và mặc cảm với cuộc sống. Do đó, với mong muốn xây dựng sản phẩm đi từ căn nguyên gốc rễ gây ra tình trạng nám, chúng tôi tạo ra một combo tác động toàn diện cả nguyên nhân bên trong lẫn bên ngoài – khác biệt hoàn toàn so với các dòng sản phẩm trị nám trắng da trên thị trường, giúp chị em lấy lại nét tươi trẻ, tự tin, rạng ngời vốn có.</p>
              <div className="my-4 flex justify-center">
                <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 bg-white text-black font-bold rounded-md">Xem thêm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-[#f18017] flex items-center justify-center flex-col">
            <div className="w-5/6 text-white">
              <h2 className="text-4xl py-4">CỘNG ĐỒNG HOSHI</h2>
              <p className="font-bold">Không chỉ phủ mạnh thị trường trong nước, Hoshi đã và đang vươn mình vượt biên giới, trở thành cơn sốt ở nhiều quốc gia tại một số châu lục như Châu Âu, Châu Á… Hoshi đang từng bước gây dựng nên một cộng đồng làm đẹp văn minh, an toàn và hiệu quả…</p>
              <div className="my-4 flex justify-center">
                <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 bg-white text-black font-bold rounded-md">Xem thêm</span>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <Image src={StoryImage2} alt="hinh-anh-cong-dong-3" className="hover:scale-105 duration-500" />
          </div>
        </div>
      </section>
      <Handbook data={resHandbook.data} />
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
    </>
  )
}
