import Image from 'next/image'
import Slider from '../_component/Slider'
import BaseButton from '../_component/common/BaseButton'
import AppFooter from '../_component/AppFooter'

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
        <div className="max-w-6xl m-auto px-4">
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
          className="absolute inset-0 z-0 bg-[url(https://mamvietnam.vn/wp-content/uploads/2022/07/289378528_179025127900602_116522636842752539_n.jpg)] bg-cover bg-no-repeat bg-center-center w-full"
        />
        <div className='relative max-w-6xl m-auto'>
          <div className="flex max-md:flex-col">
            <div className="basis-2/5 md:max-w-[40%] px-4 pb-5">
              <div>
                <h2 className="uppercase text-white text-3xl font-semibold">Tầm nhìn và sứ mệnh</h2>
              </div>
              <div className='numbered-section-white'>02</div>
            </div>
            <div className='basic-3/5 md:max-w-[60%] px-4 pb-5 text-white leading-7'>
              <div>
                <p>Ngay từ những ngày đầu thành lập, MAM Việt Nam đã mang trên mình sứ mệnh kiến tạo nên những giá trị sống bền vững cho từng gia đình từ không gian nội thất khác biệt, sang trọng và hiện đại. </p>
                <p>
                  <span>Để hoàn thành được sứ mệnh cao cả ấy và để làm hài lòng mọi khách hàng, đội ngũ MAM Việt Nam luôn nỗ lực từng ngày, đặt trọn niềm đam mê vào từng dự án.</span>
                  <span>Hiện tại chúng tôi đã và đang hợp tác thực hiện hàng nghìn dự án lớn nhỏ về thiết kế và thi công nội thất căn hộ, chung cư, biệt thự… MAM luôn nỗ lực hết sức mình trong việc biến những trăn trở của khách hàng thành sự hài lòng và tin cậy. Chúng tôi hy vọng bằng sự nhiệt huyết, nhạy bén với xu hướng mới, trong tương lai MAM sẽ mang đến bạn nhiều hơn những mẫu thiết kế đẳng cấp, trở thành đơn vị thiết kế và thi công nội thất hàng đầu tại Việt Nam.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 relative">
        <div className="flex max-md:flex-col max-w-6xl m-auto">
          <div className="md:max-w-[60%] px-4 pb-5">
            <div className="flex flex-col">
              <p className="mb-5">
                <span>Là đơn vị thiết kế và thi công nội thất nhận được sự tin tưởng từ khách hàng, mỗi nhân sự tại MAM Việt Nam đã, đang và sẽ hàng ngày đầu tư tâm huyết, thời gian, công sức và chất xám vào từng sản phẩm, từ những chi tiết nhỏ nhất để mang đến cho khách hàng chất lượng dịch vụ tốt nhất.</span>
              </p>
              <p className="mb-5">
                <span>MAM Việt Nam cam kết:</span>
              </p>
              <ul className="list-disc">
                <li className="ml-5 mb-3">Đảm bảo tiến độ dự án đạt chuẩn 100% theo hợp đồng</li>
                <li className="ml-5 mb-3">Chế độ bảo hành, bảo trì uy tín, đáng tin cậy</li>
                <li className="ml-5 mb-3">Đảm bảo tuyệt đối về chất lượng và nguồn gốc xuất xứ của vật liệu, cam kết hoàn trả 100% chi phí nếu như có bất cứ sai phạm nào.</li>
                <li className="ml-5 mb-3">Luôn đặt niềm tin, sự kỳ vọng và sự hài lòng của khách hàng lên hàng đầu. </li>
              </ul>
            </div>
          </div>
          <div className="basis-2/5 md:max-w-[40%] px-4 pb-5">
            <div className="">
                <div>
                  <h2 className="uppercase text-black text-3xl font-semibold">Chất lượng dịch vụ</h2>
                </div>
                <div className='numbered-section-black'>03</div>
              </div>
            </div>
        </div>
      </section>
      <section className="py-7 relative">
        <div
          className="absolute inset-0 z-0 bg-[url(https://mamvietnam.vn/wp-content/uploads/2022/07/Phoi-canh-NM-cong-ty-TNHH-SD-Global-600x600-1.jpg)] bg-cover bg-no-repeat bg-center-center w-full"
        >
          <div className="bg-[#00000080] absolute inset-0" />
        </div>
        <div className='relative max-w-6xl m-auto'>
          <div className="flex max-md:flex-col">
            <div className="basis-2/5 md:max-w-[40%] px-4 pb-5">
              <div>
                <h2 className="uppercase text-white text-3xl font-semibold">Nhà máy và công nghệ</h2>
              </div>
              <div className='numbered-section-white'>04</div>
            </div>
            <div className='basic-3/5 md:max-w-[60%] px-4 pb-5 text-white leading-7'>
              <div>
                <p className="mb-5">
                  <span>Việc áp dụng và chuyển giao công nghệ sản xuất tiên tiến trên thế giới được MAM Việt Nam ưu tiên hàng đầu để đảm bảo một cách tối đa vấn đề công năng và thẩm mỹ cho từng sản phẩm.</span>
                </p>
                <p className="mb-5">
                  <span>Để hoàn thành được sứ mệnh cao cả ấy và để làm hài lòng mọi khách hàng, đội ngũ MAM Việt Nam luôn nỗ lực từng ngày, đặt trọn niềm đam mê vào từng dự án.</span>
                </p>
                <p>
                  <span>Sở hữu 2 nhà máy sản xuất với quy mô lớn được trang bị đầy đủ các loại máy móc, trang thiết bị hiện đại theo quy chuẩn quốc tế, đội ngũ công nhân của MAM Việt Nam luôn đảm bảo mọi hoạt động sản xuất diễn ra đúng quy trình, liền mạch và an toàn. Từ đó mang đến cho khách hàng những sản phẩm chất lượng cao nhất, hoàn hảo và phù hợp với không gian.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 relative">
        <div className="flex max-md:flex-col max-w-6xl m-auto">
          <div className="md:max-w-[60%] px-4 pb-5">
            <div className="mb-4">
              <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/289486218_179025217900593_2576056387368917256_n-1536x1152.jpg" width={1020} height={765} alt="image" />
            </div>
            <div>
              <Image src="https://mamvietnam.vn/wp-content/uploads/2022/07/289730854_179025447900570_4484181443201568015_n-1536x768.jpg" width={1020} height={510} alt="image" />
            </div>
          </div>
          <div className="basis-2/5 md:max-w-[40%] px-4 pb-5">
            <div className="">
              <div>
                <h2 className="uppercase text-black text-3xl font-semibold">Nguồn nhân lực</h2>
                <div className='numbered-section-black'>05</div>
              </div>
              <div className="after:content-[''] after:table after:clear-both"></div>
              <div>
                <p className="mb-5">
                  <span>MAM Việt Nam sở hữu một đội ngũ nhân lực có trình độ chuyên môn cao, nhiệt tình, trách nhiệm, với tác phong làm việc chuyên nghiệp, có khả năng tư vấn cho khách hàng một cách tận tình nhất.</span>
                </p>
                <p className="mb-5">
                  <span>Mỗi KTS tại MAM đều là cử nhân ngành kiến trúc tại các trường đại học uy tín và danh giá bậc nhất, có nhiều năm kinh nghiệm trong lĩnh vực thiết kế nội thất, am hiểu những quy tắc về phối hợp màu sắc và kiến thức phong thủy. Tài năng và sự sáng tạo được các KTS thể hiện trong từng ý tưởng thiết kế, cho ra đời những “tác phẩm nghệ thuật” hoàn mỹ nhất, tối ưu chi phí – không gian và thời gian. </span>
                </p>
                <p className="mb-5">
                  <span>Các nghệ nhân thi công của MAM đều có tay nghề thi công cao và am hiểu một cách chuyên sâu về nguyên liệu chế tác cũng như vấn đề thi công nội thất, đảm bảo thi công chính xác tuyệt đối, mọi công trình sẽ luôn đạt được độ hoàn thiện cao và bền đẹp với thời gian.</span>
                </p>
                <p className="mb-5">
                  <span>Là đơn vị tiên phong trên thị trường nội thất Việt, MAM Việt Nam đã nhận được rất nhiều sự tin tưởng và lựa chọn của khách hàng cũng như sự đánh giá cao về chất lượng của các chuyên gia trong nghề, tự tin trở thành địa chỉ tin cậy cho các không gian sống tối thượng của quý vị.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppFooter />
    </>
  )
}

export default GioiThieu