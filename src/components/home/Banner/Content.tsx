import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <div className="flex flex-col justify-center gap-2">{children}</div>;
}
