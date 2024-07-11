import Image from 'next/image'
import Slider from '../_component/Slider'
import BaseButton from '../_component/common/BaseButton'

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
      <section className="py-7">
        <div className="max-w-6xl m-auto">
          <h2 className="max-md:m-3 font-semibold text-4xl md:mb-3">Chúng tôi là ai</h2>
          <div className="flex max-md:flex-col">
            <div className="md:max-w-[50%] max-md:mx-3 max-md:mb-3 md:pr-8">
              <div className="flex flex-col items-center h-full">
                <div className="pb-7 max-md:text-center">
                  <p className="mb-5">
                    <span>VietBuild – DKtowA được thành lập năm 2007. Sau hơn một thập kỷ hình thành và phát triển cùng nỗ lực không ngừng để vượt qua thử thách chúng tôi đã đạt được nhiều mục tiêu một cách vững chắc. Nhờ những nỗ lực của mình, công ty đã, đang và sẽ là một trong những công ty sản xuất nội thất hàng đầu tại Việt Nam. Đồng thời giúp cho ngành nội thất nước nhà nâng cao được năng lực cạnh tranh, đủ sức thay thế nhiều đơn vị nội thất nước ngoài. Mục tiêu tiếp theo của chúng tôi là trở thành nhà thầu nội thất hàng đầu trong khu vực châu Á và đóng góp hiệu quả hơn cho nền kinh tế quốc gia cũng như mang lại hiệu quả trong mục tiêu phát triển kinh doanh của công ty. Chúng tôi đang nỗ lực, dần kiện toàn trong kế hoạch hoạt động sản xuất, thi công hoàn thiện nội thất nước ngoài bằng nguồn lực có trình độ chuyên môn cao và hệ thống quản lý mang đẳng cấp quốc tế. Với đội ngũ nhân viên tâm huyết, có kỷ luật, năng động và sáng tạo, giàu kinh nghiệm, giỏi về chuyên môn và luôn luôn chủ động, nhiệt huyết mang đến cho khách hàng những sản phẩm chất lượng cao với giá cả cạnh tranh nhất. Đây cũng là cơ sở để chúng tôi đạt được các mục tiêu cũng là giá trị cốt lõi của công ty. Những nỗ lực không ngừng cũng như đóng góp của VietBuild – DKtowA trong suốt hơn một thập kỷ qua đã và đang được khách hàng và xã hội ghi nhận tích cực. Tiêu biểu cho những nỗ lực đó là trong những năm qua chúng tôi đã thi công hàng loạt các gói thầu lớn như khách sạn Mường Thanh từ Bắc vào Nam, các khu resort lớn, các dự án khu đô thị, chung cư lớn,… trên toàn quốc. Chúng tôi với tinh thần chân thành nhất luôn mong muốn được mang hết sức mình để phục vụ quý khách hàng và cam kết hoàn thành xuất sắc mọi mục tiêu, vượt kỳ vọng của quý khách hàng.</span>
                  </p>
                  <div className="max-w-[200px] bg-black h-[3px] w-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[50%]">
              <Image
                className="w-full"
                src="https://mamvietnam.vn/wp-content/uploads/2022/07/289572355_179025167900598_2204153395185210827_n-900x1200.jpg"
                alt="image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 relative">
        <div
          className="absolute inset-0 z-0 bg-[url(https://mamvietnam.vn/wp-content/uploads/2022/07/289378528_179025127900602_116522636842752539_n.jpg)] bg-cover bg-no-repeat bg-center-center h-[400px] w-full"
        />
        <div className='relative max-w-6xl m-auto'>
          <div>
            <div>
              <h2 className="uppercase text-white text-3xl font-semibold">Tầm nhìn và sứ mệnh</h2>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  )
}

export default GioiThieu