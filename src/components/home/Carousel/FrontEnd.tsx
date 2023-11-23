import { useState } from 'react';
import { frontEnd } from '@/@helpers/videos';
import { Banner } from '../Banner';
import { useSnapCarousel } from 'react-snap-carousel';
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function FrontEnd() {
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
    <>
      <h2 className="bg-yellow-500 text-[35px] w-[204px] text-center "></h2>
      <div className="flex gap-5">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <CaretLeft size={40} />
        </button>
        <ul
          className="gap-4 my-3 mb-10"
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
          }}
        >
          {frontEnd.map((frontEnd) => (
            <li
              key={frontEnd.id}
              className="bg-gray-300 text-5xl w-(250px) h-(250px) flex-shrink-0 text-white flex justify-center items-center overflow-hidden"
            >
              <Banner.VideoContainer videoImage="slide" key={frontEnd.id} img={frontEnd.img} />
            </li>
          ))}
        </ul>
        <button onClick={handleNext} disabled={currentIndex === frontEnd.length - 1}>
          <CaretRight size={40} />
        </button>
      </div>
    </>
  );
}
