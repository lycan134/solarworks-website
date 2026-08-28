import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import ChatWidget from "./ai/ChatWidget";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solarworks</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
        <ChatWidget />
      </body>
    </html>
  );
}
