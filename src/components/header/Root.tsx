import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <>
      <header className="w-full h-24 bg-color-black-dark flex items-center  justify-between flex-col px-2 md:px-10">
        <div className='flex justify-between w-full items-center h-full'>
          {children}
        </div>
        
      </header>
      <div className='w-full'>
        <hr className="w-full" style={{ borderTop: '1px solid #04ADBF'}} />
      </div>
    </>
    
  );
}
