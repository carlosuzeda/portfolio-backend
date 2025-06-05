import { Tag } from "../tag";

export function StackSection() {
  const stackList = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Fastify",
    "Nest.js",
    "PostgreSQL",
    "Redis",
    "Docker",
  ];

  return (
    <section className="w-full overflow-hidden py-4 max-md:w-xs mx-auto">
      <div className="flex animate-scroll gap-4 whitespace-nowrap ">
        {stackList.map((item, index) => (
          <Tag key={index} name={item} />
        ))}

        {stackList.map((item, index) => (
          <Tag key={index + stackList.length} name={item} />
        ))}
      </div>
    </section>
  );
}
