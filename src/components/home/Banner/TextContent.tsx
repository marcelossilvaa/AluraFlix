interface TextContextProps {
  text: string;
}

export default function TextContent({ text }: TextContextProps) {
  return <p className="text-base md:text-body-medium font-normal">{text}</p>;
}
