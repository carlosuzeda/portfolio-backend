import { ThemeSwitcher } from "../switch-theme";
import { Button } from "../ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>Carlos Uzeda</Link>
          <nav className="flex items-center gap-6">
            <Button variant={"secondary"}>EN</Button>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
