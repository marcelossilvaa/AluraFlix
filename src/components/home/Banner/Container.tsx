import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export default function Container({ children }: ContentProps) {
  return (
    <div className="h-full flex-1 w-full flex flex-col items-start justify-center gap-10 ">
      {children}
    </div>
  );
}
