import React from 'react';
import Slider from 'react-slick';
import { Banner } from '../Banner';
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  tittle: string
  data: { id: number; link: string; description: string }[];
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <CaretRight size={60} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <CaretLeft size={60} />
    </div>
  );
};

export default function Category({ tittle, data }: CarouselProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className=''>
      <div className='w-full max-w-7xl'>
        <h2 className="bg-blue-200 text-[35px] w-[204px] text-center ">{tittle}</h2>
      </div>
      
      <Slider {...settings} className='mx-10 max-md:mx-4'>
        {data.map((item) => (
          <div key={item.id} className=" text-5xl flex-shrink-0 text-white flex justify-center items-center ">
            <Banner.VideoContainer videoImage="slide" key={item.id} link={item.link} description={item.description} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
