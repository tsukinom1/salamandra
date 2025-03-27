"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AiBot from "./AiBot";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && <Header />}
      <main className={isAuthPage ? "" : "container mx-auto flex-1 px-4"}>
        {children}
      </main>
      {!isAuthPage && <AiBot />}
      {!isAuthPage && <Footer />}
    </>
  );
}
