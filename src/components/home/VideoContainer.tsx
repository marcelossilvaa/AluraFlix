import React from 'react';

interface VideoDefaultProps {
  videoImage?: 'banner' | 'slide';
  link: string;
  description?: string
}

export default function VideoDefault({ videoImage, link, description }: VideoDefaultProps) {
  return (
    <div className='flex flex-col items-center'>
      <iframe
      className={
        videoImage === 'banner' ? 'w-[400px] h-[225px] md:w-[660px] md:h-[355px]' : ' w-[350px] h-[200px] md:w-[400px] md:h-[225px] 2xl:w-[500px] 2xl:h-[275px]'
      }
      src={link}
      title="YouTube video player"
      frameBorder="4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      >
      </iframe>
      <p className='text-xl text-start'>{description}</p>
    </div>
    
  );
}