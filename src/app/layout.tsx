import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark';
                const root = document.documentElement;
                
                if (isDark) {
                  root.classList.add('dark');
                  root.style.setProperty('--background', '#0a192f');
                  root.style.setProperty('--foreground', '#ffffff');
                  root.style.setProperty('--primary', '#64ffda');
                  root.style.setProperty('--primary-hover', '#52e6c8');
                  root.style.setProperty('--secondary', '#8892b0');
                  root.style.setProperty('--card-bg', '#112240');
                  root.style.setProperty('--section-bg', '#112240');
                  root.style.setProperty('--border-color', '#1e293b');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
