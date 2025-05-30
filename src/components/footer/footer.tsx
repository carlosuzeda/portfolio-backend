import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:flex-row gap-8 py-8">
          <Link href={"/"} className="text-muted-foreground">
            Carlos Uzeda
          </Link>
          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href={"/"} className="hover:text-primary">
              <Twitter className="size-5" />
            </Link>
            <Link href={"/"} className="hover:text-primary">
              <Github className="size-5" />
            </Link>
            <Link href={"/"} className="hover:text-primary">
              <Linkedin className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
