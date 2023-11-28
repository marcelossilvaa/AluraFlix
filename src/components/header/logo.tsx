import Image from 'next/image';
import logoImage from '../../assets/logo.svg';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logoImage} width={200} height={40} alt="" />
    </Link>
  );
}
