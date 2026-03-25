import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { PageLoader } from "@/components/ui/PageLoader";
import { HomePage } from "@/pages/HomePage";

const TermsOfServicePage = lazy(() =>
  import("@/pages/TermsOfServicePage").then((m) => ({ default: m.TermsOfServicePage }))
);
const PrivacyPolicyPage = lazy(() =>
  import("@/pages/PrivacyPolicyPage").then((m) => ({ default: m.PrivacyPolicyPage }))
);
const ResourcesIndexPage = lazy(() =>
  import("@/pages/BlogIndexPage").then((m) => ({ default: m.ResourcesIndexPage }))
);
const ArticlePage = lazy(() =>
  import("@/pages/ArticlePage").then((m) => ({ default: m.ArticlePage }))
);
const ProductPage = lazy(() =>
  import("@/pages/ProductPage").then((m) => ({ default: m.ProductPage }))
);
const PricingPage = lazy(() =>
  import("@/pages/PricingPage").then((m) => ({ default: m.PricingPage }))
);
const ConsultantsPage = lazy(() =>
  import("@/pages/ConsultantsPage").then((m) => ({ default: m.ConsultantsPage }))
);
const BookDemoPage = lazy(() =>
  import("@/pages/BookDemoPage").then((m) => ({ default: m.BookDemoPage }))
);
const PledgePage = lazy(() =>
  import("@/pages/PledgePage").then((m) => ({ default: m.PledgePage }))
);

function LegacyBlogArticleRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/resources/${slug}`} replace />;
}

function App() {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/pledge" element={<PledgePage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
