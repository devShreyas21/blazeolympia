'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {children}

      {/* Scripts for plugins */}
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />

      {/* ✅ Load main.js AFTER other libraries */}
      <Script
        src="/assets/js/main.js"
        strategy="afterInteractive"
        onLoad={() => console.log("✅ main.js loaded")}
        onError={(e) => console.error("❌ main.js failed", e)}
      />
    </>
  );
}
