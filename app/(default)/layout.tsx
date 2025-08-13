"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import FloatingContact from "@/components/floating-contact";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
      <FloatingContact />
      
      {/* Padding for sticky header */}
      <style jsx global>{`
        body {
          padding-top: 0;
          transition: padding-top 0.3s ease;
        }
        body.header-sticky {
          padding-top: 70px;
        }
      `}</style>
    </>
  );
}
