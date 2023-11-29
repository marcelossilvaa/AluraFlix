import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className="max-w-full h-[809px] bannerImage px-10 flex justify-center items-center gap-[3.125rem]">
      <div className='max-w-7xl flex justify-between items-center -mt-44 flex-col md:flex-row gap-3 md:gap-0 '>
        {children}
      </div>
    </section>
  );
}
