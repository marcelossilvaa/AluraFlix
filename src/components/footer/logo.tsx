import Image from 'next/image';
import logoImage from '../../assets/logo.svg';

export default function Logo() {
  return (
    <>
      <footer className="py-5 flex flex-col gap-4 items-center">
        <hr className="w-full" style={{ borderTop: '1px solid #04ADBF' }} />
        <Image src={logoImage} width={200} height={40} alt="" />
      </footer>
    </>
  );
}
