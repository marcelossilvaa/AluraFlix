import { useState } from 'react';
import { Banner } from '../Banner';
import { useSnapCarousel } from 'react-snap-carousel';
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface CarouselProps{
  tittle: string
  data: { id: number; link: string; description:string }[];
}

export default function Category({tittle, data}: CarouselProps) {
  const { scrollRef, next, prev } = useSnapCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    next();
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    prev();
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section className=''>
      <div className='w-full max-w-7xl'>
        <h2 className="bg-blue-200 text-[35px] w-[204px] text-center ">{tittle}</h2>
      </div>
      
      <div className="flex gap-5">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <CaretLeft size={40} />
        </button>
        <ul
          className="gap-4 my-3 mb-16"
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
          }}
        >
          {data.map((data) => (
            <li
              key={data.id}
              className=" text-5xl flex-shrink-0 text-white flex justify-center items-center overflow-hidden"
            >
              <Banner.VideoContainer videoImage="slide" key={data.id} link={data.link} description={data.description}/>
            </li>
          ))}
        </ul>
        <button onClick={handleNext} disabled={currentIndex === data.length - 1}>
          <CaretRight size={40} />
        </button>
      </div>
    </section>
  );
}
