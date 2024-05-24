import React from 'react'
import Slider from '../_component/Slider'
import { listImage } from '../page'

function GioiThieu() {
  return (
    <>
      <section className="text-[blue] overflow-hidden m-auto">
        <Slider repeat={3000}>
          {listImage.map((item: any) => (
            <div
              key={item.src}
              className={`min-w-full h-full bg-cover bg-no-repeat bg-center-center relative`}
              style={{backgroundImage: `url(${item.src})`}}
            >
              <div className="bg-[#00000080] absolute inset-0 flex items-center justify-center">
                {/* <AnimatedText
                  el="h2"
                  text={item.title}
                  className='w-[70%] text-center'
                /> */}
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default GioiThieu