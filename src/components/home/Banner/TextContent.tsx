interface TextContextProps {
  text: string;
}

export default function TextContent({ text }: TextContextProps) {
  return <p className="text-body-medium font-light text-justify">{text}</p>;
}
