'use client'

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick"
import Modal from "../common/Modal";
import PlayIcon from "@/assets/icons/PlayIcon";
import { FeedbackData } from "@/entities/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface FeedbackProps {
  listFeedback: FeedbackData[]
}
export default function Feedback(props: FeedbackProps) {

  const { listFeedback } = props;

  const [openModal, setOpenModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <section className="py-7">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Cảm nhận khách hàng</h2>
        </div>
        <div className="text-center mb-4">
          <p className="font-bold">Hàng triệu khách hàng đã trải nghiệm và hài lòng. Hoshi tự hào khi trở thành “người bạn” đồng hành đáng tin cậy của các chị em trên hành trình lấy lại làn da trắng mịn, hồng hào và tươi trẻ.</p>
        </div>
        <div className='overflow-hidden'>
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {listFeedback.map(feedback => (
              <SwiperSlide
                key={feedback.id}
                onClick={() => {
                    setVideoUrl(feedback.content)
                    setOpenModal(true)
                }}
                className="w-full group cursor-pointer"
              >
                <Image src={feedback.imageUrl} alt={feedback.imageUrl} width={100} height={100} className="w-full" />
                <div className="absolute inset-0 bg-black opacity-40 w-full" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 duration-300 border-2 border-white rounded-full cursor-pointer">
                  <PlayIcon />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-4 flex justify-center">
          <span className="cursor-pointer duration-300 uppercase hover:opacity-80 px-4 py-2 text-[#f18017] border-2 border-[#f18017] font-bold rounded-md hover:bg-[#f18017] hover:text-white">Xem thêm</span>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        background="#ccc"
      >
        <div className="w-[400px] m-auto" dangerouslySetInnerHTML={{ __html: videoUrl }} />
      </Modal>
    </section>
  )
}