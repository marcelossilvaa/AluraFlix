import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <section className="max-w-full h-[809px] bannerImage px-10 flex items-center gap-[3.125rem]">
      {children}
    </section>
  );
}
