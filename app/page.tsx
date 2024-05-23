import Image from "next/image";
import Slider from "./_component/Slider";
import BaseButton from "./_component/common/BaseButton";
import AnimatedText from "./_component/common/AnimatedText";

const listImage = [
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
  return (
    <>
    {/* section */}
      <section className="text-[blue] overflow-hidden m-auto">
        <Slider>
          {listImage.map((item: any) => (
            <div
              key={item.src}
              className={`min-w-full h-full bg-cover bg-no-repeat bg-center-center relative`}
              style={{backgroundImage: `url(${item.src})`}}
            >
              <div className="bg-[#00000080] absolute inset-0 flex items-center justify-center">
                {/* <h3 className="uppercase text-white text-4xl font-semibold">{item.title}</h3> */}
                {/* {item.title.split(" ").map((el: any, i: number) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: i / 10,
                    }}
                    key={i}
                    className='uppercase text-white text-4xl font-semibold'
                  >
                    {el}&nbsp;
                  </motion.span>
                ))} */}
                <AnimatedText
                  el="h2"
                  text={item.title}
                  className='w-[70%] text-center'
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* section */}
      <section className="md:py-7">
        <div className="max-w-6xl m-auto flex max-md:flex-col">
          <div className="bg-[#aaaaaa] md:max-w-[40%] max-md:m-3">
            <div className="p-5 pt-[7%] flex flex-col items-center justify-center h-full">
              <div className="pb-7 max-md:text-center">
                <h2 className="text-2xl mb-3">THIẾT KẾ NỘI THẤT</h2>
                <p>
                  <span>Với kinh nghiệm nhiều năm cùng đội ngũ chuyên gia có trình độ chuyên môn cao trong lĩnh vực thiết kế nội thất, quy trình thiết kế đạt chuẩn quốc tế, MAM Việt Nam tự tin mang đến cho khách hàng dịch vụ thiết kế nội thất uy tín và chuyên nghiệp hàng đầu. Chúng tôi luôn cập nhật và đón đầu những xu hướng thiết kế hiện đại, sang trọng với mong muốn kiến tạo nên không gian sống hoàn hảo cho mọi gia đình. </span>
                </p>
              </div>
              <div>
                <BaseButton>
                  Xem thêm
                </BaseButton>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[60%]">
            <Image
              className="w-full"
              src="https://mamvietnam.vn/wp-content/uploads/2022/07/289561492_179025271233921_7269436589866529378_n-1067x800.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/* section */}
      <section className="md:py-7">
        <div className="max-w-6xl m-auto flex max-md:flex-col">
          <div className="w-full md:max-w-[60%]">
            <Image
              className="w-full"
              src="https://mamvietnam.vn/wp-content/uploads/2022/07/289561492_179025271233921_7269436589866529378_n-1067x800.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-[#aaaaaa] md:max-w-[40%] max-md:m-3">
            <div className="p-5 pt-[7%] flex flex-col items-center justify-center h-full">
              <div className="pb-7 max-md:text-center">
                <h2 className="text-2xl mb-3">THIẾT KẾ NỘI THẤT</h2>
                <p>
                  <span>Với kinh nghiệm nhiều năm cùng đội ngũ chuyên gia có trình độ chuyên môn cao trong lĩnh vực thiết kế nội thất, quy trình thiết kế đạt chuẩn quốc tế, MAM Việt Nam tự tin mang đến cho khách hàng dịch vụ thiết kế nội thất uy tín và chuyên nghiệp hàng đầu. Chúng tôi luôn cập nhật và đón đầu những xu hướng thiết kế hiện đại, sang trọng với mong muốn kiến tạo nên không gian sống hoàn hảo cho mọi gia đình. </span>
                </p>
              </div>
              <div>
                <BaseButton>
                  Xem thêm
                </BaseButton>
              </div>
            </div>
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
              <Slider>
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
              </Slider>
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
                <li className="py-1">Nhận thông tin từ chúng tôi</li>
              </ul>
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
    </>
  )
}
