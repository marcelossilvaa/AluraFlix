import Image from 'next/image';
import logoImage from '../../assets/image 1.png';

export default function Logo() {
  return (
    <>
      <footer className="py-5 flex flex-col gap-4 items-center">
        <hr className="w-full" style={{ borderTop: '1px solid #2A7AE4' }} />
        <Image src={logoImage} width={170} height={40} alt="" />
      </footer>
    </>
  );
}
