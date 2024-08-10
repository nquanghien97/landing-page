'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick"
import Modal from "../common/Modal";
import BaseButton from "../common/BaseButton";
import PlayIcon from "@/assets/icons/PlayIcon";
import { FeedbackEntity } from "@/entities/Feedback";
import { getFeedbacks } from "@/services/feedbacks";

interface FeedbackProps {
  listFeedback: FeedbackEntity[]
}
export default function Feedback(props: FeedbackProps) {

  const { listFeedback } = props;

  const [openModal, setOpenModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  return (
    <section className="md:py-7">
      <div className="max-w-6xl m-auto flex flex-col">
        <div className="text-center w-full mb-4">
          <h2 className="text-4xl uppercase text-[#f18017]">Cảm nhận khách hàng</h2>
        </div>
        <div className="text-center mb-4">
          <p className="font-bold">Hàng triệu khách hàng đã trải nghiệm và hài lòng. Hoshi tự hào khi trở thành “người bạn” đồng hành đáng tin cậy của các chị em trên hành trình lấy lại làn da trắng mịn, hồng hào và tươi trẻ.</p>
        </div>
        <div>
          <Slider
            dots={false}
            infinite={listFeedback.length > 5}
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
                className="cursor-pointer !mr-2 relative !w-[200px] h-[150px]"
                onClick={() => {
                  if (!dragging) {
                    setVideoUrl(feedback.content)
                    setOpenModal(true)
                  }
                }}
              >
                <Image src={feedback.imageUrl} alt={feedback.imageUrl} width={200} height={150} className="w-full" />
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 duration-300 border-2 border-white rounded-full">
                  <PlayIcon />
                </div>
              </div>
            ))}
          </Slider>
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