'use client'

import Image from "next/image";
import CustomSlider from "./_component/CustomSlider";
import BaseButton from "./_component/common/BaseButton";
import AnimatedText from "./_component/common/AnimatedText";
import AppFooter from "./_component/AppFooter";
import Slider from "react-slick";
import Modal from "./_component/common/Modal";
import { useState } from "react";
import { listFeedback } from "@/config/listFeedback";
import PlayIcon from "@/assets/icons/PlayIcon";
import bcrypt from 'bcrypt';

export const listImage = [
  {
    src: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289967096_179026527900462_8941165103126664339_n.jpg',
    title: 'THIẾT KẾ KIẾN TRÚC - NHÀ MÁY SẢN XUẤT'
  },
  {
    src: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289970998_179025507900564_6123763105644138584_n.jpg',
    title: 'THIẾT KẾ NỘI THẤT - THI CÔNG NỘI THẤT'
  },
]

export default function Home() {

  const [openModal, setOpenModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  // const password = bcrypt.hashSync('password', 12);
  // console.log(password)

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
      <section className="md:py-7">
        <div className="max-w-6xl m-auto flex flex-col">
          <div className="text-center w-full mb-4">
            <h2 className="text-4xl uppercase">Cảm nhận khách hàng</h2>
          </div>
          <div className="text-center mb-4">
            <p className="font-bold">Hàng triệu khách hàng đã trải nghiệm và hài lòng. Hoshi tự hào khi trở thành “người bạn” đồng hành đáng tin cậy của các chị em trên hành trình lấy lại làn da trắng mịn, hồng hào và tươi trẻ.</p>
          </div>
          <div>
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={5}
              draggable
              swipeToSlide
              className="flex gap-2"
              arrows={false}
              afterChange={handleAfterChange}
              beforeChange={handleBeforeChange}
            >
              {listFeedback.map(feedback => (
                <div
                  key={feedback.id}
                  className="cursor-pointer !mr-2 relative"
                  onClick={() => {
                    if(!dragging) {
                      setVideoUrl(feedback.thumbnailUrl)
                      setOpenModal(true)
                    }
                  }}
                >
                  <Image src={feedback.imageUrl} alt={feedback.imageUrl} width={200} height={200} className="w-full" />
                  <div className="absolute inset-0 bg-black opacity-40" />
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 duration-300 border-2 border-white rounded-full">
                    <PlayIcon />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center my-4">
            <BaseButton>Xem thêm</BaseButton>
          </div>
        </div>
      </section>
      {/* section */}
      <section className="md:py-7">
        <div className="max-w-6xl m-auto flex flex-col">
          <div className="text-center w-full mb-4">
            <h2 className="text-4xl uppercase">Sản phẩm</h2>
          </div>
          <h1 className="flex items-center justify-between relavive w-full">
            <b className="bg-[black] flex-1 h-[2px] opacity-10" />
            <span className="text-center mx-4 text-3xl">HOSHI KHUYÊN DÙNG</span>
            <b className="bg-[black] flex-1 h-[2px] opacity-10" />
          </h1>
          <div className="text-center mb-4">
            <p className="font-bold">Hàng triệu khách hàng đã trải nghiệm và hài lòng. Hoshi tự hào khi trở thành “người bạn” đồng hành đáng tin cậy của các chị em trên hành trình lấy lại làn da trắng mịn, hồng hào và tươi trẻ.</p>
          </div>
        </div>
      </section>
      {/* section */}
      <section className="bg-[url('https://mamvietnam.vn/wp-content/uploads/2022/06/v8-1067x800.jpg')] bg-cover bg-no-repeat bg-center-center h-[500px] w-full">
        <div className="text-center flex items-center h-full flex-col justify-center p-2">
          <h3 className="text-3xl text-white py-2">MAM VIETNAM</h3>
          <p className="text-white py-2">
            <span>
              Với mục tiêu mang đến cho khách hàng những không gian sống hoàn hảo cùng khả năng sáng tạo không giới hạn, MAM luôn không ngừng phát triển và ngày càng khẳng định vị thế tiên phong của mình trên thị trường nội thất cao cấp Việt.
            </span>
          </p>
          <BaseButton className="my-4">
            Giới thiệu về MAM
          </BaseButton>
        </div>
      </section>
      <section className="py-7">
        <div className="max-w-6xl m-auto flex max-md:flex-col">
          <div className="flex justify-center flex-col w-full">
            <h3 className="uppercase text-[#ff9900] mb-7 font-bold text-2xl text-center">KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h3>
            <div className="flex">
              <CustomSlider>
                <div className="flex flex-col justify-center items-center md:basis-2/6 min-w-full bg-[#aaaaaa]">
                  <div className="mb-4">
                    <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={142} height={142} className="rounded-full" />
                  </div>
                  <div className="text-center">
                    <p className="mb-4">Chị Vân</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum exercitationem ullam fugit eaque, quasi accusantium cum quibusdam porro rerum repellendus! Quidem ipsum ea doloribus! Aspernatur ipsa nisi blanditiis eligendi.</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:basis-2/6 min-w-full bg-[#aaaaaa]">
                  <div className="mb-4">
                    <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={142} height={142} className="rounded-full" />
                  </div>
                  <div className="text-center">
                    <p className="mb-4">Chị Vân</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum exercitationem ullam fugit eaque, quasi accusantium cum quibusdam porro rerum repellendus! Quidem ipsum ea doloribus! Aspernatur ipsa nisi blanditiis eligendi.</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:basis-2/6 min-w-full bg-[#aaaaaa]">
                  <div className="mb-4">
                    <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={142} height={142} className="rounded-full" />
                  </div>
                  <div className="text-center">
                    <p className="mb-4">Chị Vân</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum exercitationem ullam fugit eaque, quasi accusantium cum quibusdam porro rerum repellendus! Quidem ipsum ea doloribus! Aspernatur ipsa nisi blanditiis eligendi.</p>
                  </div>
                </div>
              </CustomSlider>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="max-w-6xl m-auto flex max-md:flex-col">
          <div className="flex justify-center flex-col w-full">
            <h3 className="uppercase text-[#ff9900] mb-7 font-bold text-2xl text-center">ĐỐI TÁC CỦA CHÚNG TÔI</h3>
            <div className="flex max-md:flex-wrap gap-4 justify-center">
              <div className="flex flex-col justify-center items-center basis-2/6">
                <div className="mb-4">
                  <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={200} height={200} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center basis-2/6">
                <div className="mb-4">
                  <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={200} height={200} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center basis-2/6">
                <div className="mb-4">
                  <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={200} height={200} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center basis-2/6">
                <div className="mb-4">
                  <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={200} height={200} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center basis-2/6">
                <div className="mb-4">
                  <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/e-280x280.jpg" alt="img" width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppFooter />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        background="#ccc"
      >
        <div dangerouslySetInnerHTML={{ __html: videoUrl }} />
      </Modal>
    </>
  )
}
