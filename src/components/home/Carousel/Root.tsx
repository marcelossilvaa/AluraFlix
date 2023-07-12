import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return <section className="px-10 -mt-44">{children}</section>;
}
