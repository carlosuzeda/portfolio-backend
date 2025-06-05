import { ProjectsSection } from "@/components/projects-section";
import { StackSection } from "@/components/stack-section";

export default function BackendPage() {
  return (
    <article className="mt-16 py-12">
      <section>
        <h1 className="text-3xl pb-12 text-center">Projects</h1>
        <div className="flex flex-col gap-4">
          <ProjectsSection />
          <ProjectsSection />
          <ProjectsSection />
          <ProjectsSection />
        </div>
      </section>

      <section>
        <h1 className="text-3xl py-12 text-center">Stack</h1>
        <div className="flex flex-col gap-4">
          <StackSection />
        </div>
      </section>

      <section>
        <h1 className="text-3xl py-12 text-center">Blog</h1>
      </section>
    </article>
  );
}
