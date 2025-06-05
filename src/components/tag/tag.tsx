interface TagProps {
  name: string;
}
export function Tag({ name }: TagProps) {
  return (
    <div className="py-2.5 px-4 max-w-32 rounded border text-center">
      {name}
    </div>
  );
}
