import Image, { StaticImageData } from 'next/image';

interface VideoDefaultProps {
  videoImage: 'banner' | 'slide';
  img: StaticImageData;
}

export default function VideoDefault({ videoImage, img }: VideoDefaultProps) {
  return (
    <div
      className={`flex items-center justify-center flex-1 ${
        videoImage === 'banner'
      }? 'w-[646px] h-[334px]': w-[432px] h-[260px]`}
    >
      <Image src={img} width={646} height={334} alt="" />
    </div>
  );
}
