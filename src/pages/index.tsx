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
    <div
      className={`${sansCaption} font-[family-name:var(--font-pt-sans-caption)]`}
    >
      <div className="flex flex-col text-center gap-4 items-center justify-center">
        <h1 className="text-5xl font-bold">Carlos Uzeda</h1>
        <p className="text-gray-300 text-sm">
          Backend Developer & Unreal Engine Developer
        </p>
        <p className="text-gray-300 text-sm">Choose a section:</p>

        <div className="flex gap-6">
          <Button asChild>
            <Link href={"/backend"}>Backend Developer</Link>
          </Button>
          <Button asChild>
            <Link href={"/unreal-engine"}>Unreal Engine Developer</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
