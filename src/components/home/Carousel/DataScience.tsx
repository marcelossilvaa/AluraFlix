import { dataScience } from '@/@helpers/videos';
import { Banner } from '../Banner';
import { useSnapCarousel } from 'react-snap-carousel';

export default function DataScience() {
  const { scrollRef } = useSnapCarousel();
  return (
    <>
      <h2 className="bg-green-600 text-[35px] w-[204px] text-center ">Data Science</h2>
      <div className="flex gap-5">
        <ul
          className="gap-4 my-3 mb-10"
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
          }}
        >
          {dataScience.map(dataScience => (
            <li
              key={dataScience.id}
              className="bg-gray-300 text-5xl w-(250px) h-(250px) flex-shrink-0 text-white flex justify-center items-center overflow-hidden"
            >
              <Banner.VideoContainer
                videoImage="slide"
                key={dataScience.id}
                img={dataScience.img}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
