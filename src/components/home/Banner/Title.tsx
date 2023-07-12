interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="text-title-medidum font-normal">{title}</h1>;
}
