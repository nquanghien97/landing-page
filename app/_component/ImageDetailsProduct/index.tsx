import Image from "next/image";
import Slider from "react-slick";

interface ImageDetailsProductProps {
  data: {
    id: number;
    imageUrl: string;
    title: string;
  }[]
}

function ImageDetailsProduct(props: ImageDetailsProductProps) {
  const { data } = props
  const settings = {
    customPaging: function(i: number) {
      return (
        <div className="w-[112px] h-[112px] cursor-pointer mt-2">
          <Image src={data[i]?.imageUrl} alt="" width={112} height={112} className="w-full h-full border-2" />
        </div>
      );
    },
    dots: true,
    dotsClass: "!flex justify-center gap-3",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map(image => (
        <div key={image.id} className="!flex justify-center">
          <Image src={image.imageUrl} alt={image.title} width={680} height={200} />
        </div>
      ))}
    </Slider>
  );
}

export default ImageDetailsProduct;