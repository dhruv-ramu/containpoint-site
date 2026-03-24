import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";

function App() {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
