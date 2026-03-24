import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

type Props = {
  children: React.ReactNode;
};

export function LegalPageShell({ children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <div className="border-b border-border/50 bg-mist/20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-steel transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to home
            </Link>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
