import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

type Props = {
  children: React.ReactNode;
};

export function MarketingPageLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
