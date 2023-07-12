import { frontEnd } from '@/@helpers/videos';
import { Banner } from '../Banner';
import { useSnapCarousel } from 'react-snap-carousel';

export default function FrontEnd() {
  const { scrollRef } = useSnapCarousel();
  return (
    <>
      <h2></h2>
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
          {frontEnd.map(frontEnd => (
            <li
              key={frontEnd.id}
              className="bg-gray-300 text-5xl w-(250px) h-(250px) flex-shrink-0 text-white flex justify-center items-center overflow-hidden"
            >
              <Banner.VideoContainer videoImage="slide" key={frontEnd.id} img={frontEnd.img} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
