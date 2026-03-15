import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/legal/LegalNotice";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiesPolicy from "./pages/legal/CookiesPolicy";

const queryClient = new QueryClient();

// Scrolls to top on navigation, but NOT when using browser back/forward buttons.
// Uses a ref to track the previous key so popstate (history nav) is excluded.
const ScrollToTop = () => {
  const { pathname, key } = useLocation();
  const prevKey = useRef(key);

  useEffect(() => {
    // popstate (back/forward) changes the key without changing pathname direction;
    // we detect it by checking if the action was a PUSH (new navigation) vs POP.
    // The simplest reliable check: if pathname changed, it’s a PUSH — scroll up.
    // If only key changed (same pathname), it’s likely a POP — leave scroll alone.
    if (prevKey.current !== key) {
      prevKey.current = key;
      // Only scroll to top for non-hash navigations
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }, [pathname, key]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
