import Image from 'next/image';
import logoImage from '../../assets/image 1.png';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoImage} width={170} height={40} alt="" />
    </Link>
  );
}
