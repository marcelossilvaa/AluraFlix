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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6Gi4_GJXO4I?si=RJ1ESCLaacu7nDKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}
