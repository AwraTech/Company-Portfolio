import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Awra Tech | Technologies & Innovation",
  description: "Company Portfolio Website",
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script dangerouslySetInnerHTML={{
        __html: `
          const theme = localStorage.getItem('theme');
          if (theme === 'dark') {
            document.documentElement.style.background = '#0A192F';
            document.body.style.background = '#0A192F';
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.style.background = '#30504F';
            document.body.style.background = '#30504F';
            document.documentElement.classList.remove('dark');
          }
        `
      }} />
      <head>
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
