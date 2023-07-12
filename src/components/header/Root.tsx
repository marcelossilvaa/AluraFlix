import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <header className="w-full h-24 bg-color-black-dark flex items-center  justify-between px-10 ">
      {children}
    </header>
  );
}
