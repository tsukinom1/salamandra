import type { Metadata } from "next";
import "@/styles/globals.css"; 
import ClientLayout from "@/components/layout/ClientLayout";
export const metadata: Metadata = {
  title: "Salamandra",
  description: "Salamandra - medical information system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icons/logo.png" type="image/x-icon" />
      <body className="flex flex-col min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
