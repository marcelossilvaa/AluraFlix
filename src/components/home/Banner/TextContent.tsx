interface TextContextProps {
  text: string;
}

export default function TextContent({ text }: TextContextProps) {
  return <p className="text-body-medium text-xl font-normal">{text}</p>;
}
