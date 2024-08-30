'use client'

import MessageIcon from '@/assets/icons/MessageIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import ZaloIcon from '@/assets/icons/ZaloIcon'
import React, { useState } from 'react'

function Contact() {
  const [showButton, setShowButton] = useState(false)
  const toggleButton = () => {
    setShowButton(!showButton)
  }
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div>
        <div className={`flex gap-2 transition-transform duration-300 ${showButton ? 'translate-x-0' : 'translate-x-[calc(100%+40px)]'}`}>
          <div className="p-2 bg-[#fff] rounded-full hover:scale-105 duration-300">
            <a href="tel:0528543333">
              <PhoneIcon width={40} height={40} />
            </a>
          </div>
          <div className="p-2 bg-[#fff] rounded-full hover:scale-105 duration-300">
            <a href="https://zalo.me/3728600451308074995" target='_blank'>
              <ZaloIcon width={40} height={40} />
            </a>
          </div>
          <div className="p-2 bg-[#fff] rounded-full hover:scale-105 duration-300">
            <a href="#">
              <MessageIcon width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="py-2 my-2 bg-white text-center rounded-full cursor-pointer border-2 border-[#f18017] text-[#f18017] hover:opacity-80 duration-300"
        onClick={toggleButton}
      >
        <span className="uppercase">Liên hệ</span>
      </div>
    </div>
  )
}

export default Contact