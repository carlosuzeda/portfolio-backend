import Link from "next/link";
import { Button } from "../ui/button";
import { Link as LinkRef } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="border border-muted rounded p-8 flex max-md:flex-col">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Project Name</h2>
        <p className="text-xs text-muted-foreground">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <Button variant={"outline"} className="" asChild>
          <Link href={""}>
            <LinkRef />
            GitHub
          </Link>
        </Button>
        <Button variant={"outline"} className="" asChild>
          <Link href={""}>
            <LinkRef />
            Deploy
          </Link>
        </Button>
      </div>
    </section>
  );
}
