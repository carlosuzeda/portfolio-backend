import { ThemeProvider } from "next-themes";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
