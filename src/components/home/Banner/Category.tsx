interface CategoryProps {
  title: string;
}

export default function Category({ title }: CategoryProps) {
  return (
    <strong className="font-normal text-title-big rounded bg-color-frontend px-5 py-2">
      {title}
    </strong>
  );
}
