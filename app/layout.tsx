import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import ChatWidget from "./ai/ChatWidget";

export const metadata: Metadata = {
  title: "Solarworks | Solar Energy Solutions",
  description:
    "Professional solar energy solutions for homes and businesses in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <CallButton />
        <ChatWidget />
      </body>
    </html>
  );
}