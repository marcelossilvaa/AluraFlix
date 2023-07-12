import { mobile } from '@/@helpers/videos';
import { Banner } from '../Banner';
import { useSnapCarousel } from 'react-snap-carousel';

export default function Mobile() {
  const { scrollRef } = useSnapCarousel();
  return (
    <>
      <h2 className="bg-yellow-500 text-[35px] w-[204px] text-center ">Mobile</h2>
      <div className="flex gap-5">
        <ul
          className="gap-4 mt-3 "
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
          }}
        >
          {mobile.map(mobile => (
            <li
              key={mobile.id}
              className="bg-gray-300 text-5xl w-(250px) h-(250px) flex-shrink-0 text-white flex justify-center items-center overflow-hidden"
            >
              <Banner.VideoContainer videoImage="slide" key={mobile.id} img={mobile.img} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
