import Link from 'next/link';

interface HomeProps {
  text: string;
}

export default function Home({ text }: HomeProps) {
  return (
    <Link href="/newvideo">
      <button className="border border-white px-4 md:px-10 py-2 font-semibold text-xl rounded-sm hover:opacity-80">
        {text}
      </button>
    </Link>
  );
}
