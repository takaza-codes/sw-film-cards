import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet the users",
  description: "Information about our users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-500 via-zinc-100 to-zinc-600">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
