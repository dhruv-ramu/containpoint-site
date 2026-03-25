import { Analytics } from "@vercel/analytics/react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { ResourcesIndexPage } from "@/pages/BlogIndexPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { ProductPage } from "@/pages/ProductPage";
import { PricingPage } from "@/pages/PricingPage";
import { ConsultantsPage } from "@/pages/ConsultantsPage";
import { BookDemoPage } from "@/pages/BookDemoPage";

function LegacyBlogArticleRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/resources/${slug}`} replace />;
}

function App() {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/for-consultants" element={<ConsultantsPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/resources" element={<ResourcesIndexPage />} />
        <Route path="/resources/:slug" element={<ArticlePage />} />
        <Route path="/blog" element={<Navigate to="/resources" replace />} />
        <Route path="/blog/:slug" element={<LegacyBlogArticleRedirect />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
