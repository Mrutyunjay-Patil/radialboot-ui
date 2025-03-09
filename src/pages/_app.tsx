// src/pages/_app.tsx
// Import all CSS through the centralized importer
import "@/lib/cssImporter";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize Bootstrap JavaScript on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;