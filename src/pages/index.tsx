import { Button } from "@/components/ui/button";
import { PT_Sans_Caption } from "next/font/google";
import Link from "next/link";

const sansCaption = PT_Sans_Caption({
  variable: "--font-pt-sans-caption",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <article
      className={`${sansCaption} font-[family-name:var(--font-pt-sans-caption)]`}
    >
      <div className="flex flex-col text-center gap-4 items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">Carlos Uzeda</h1>
        <p className="text-gray-300 text-sm">
          Backend Developer & Unreal Engine Developer
        </p>
        <p className="text-gray-300 text-sm">Choose a section:</p>

        <div className="flex gap-6 max-sm:flex-col">
          <Button variant={"outline"} asChild>
            <Link href={"/backend"}>Backend Developer</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href={"/unreal-engine"}>Unreal Engine Developer</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
