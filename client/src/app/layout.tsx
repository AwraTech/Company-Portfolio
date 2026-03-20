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

const BASE_URL = "https://awratech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Awra Tech | Web, Mobile & Software Development in Ethiopia",
    template: "%s | Awra Tech",
  },
  description:
    "Awra Tech is a leading Ethiopian software company specializing in web development, mobile apps, UI/UX design, and digital marketing. አዋራ ቴክ - የኢትዮጵያ ቁንጮ የሶፍትዌር ኩባንያ። ድህረ ገጽ፣ የሞባይል አፕ እና ዲጂታል ማርኬቲንግ አገልግሎቶች።",
  keywords: [
    // English
    "Awra Tech", "AwraTech", "Awra Technology", "Ethiopian software company",
    "web development Ethiopia", "mobile app development Ethiopia",
    "software company Addis Ababa", "UI/UX design Ethiopia",
    "digital marketing Ethiopia", "full stack developer Ethiopia",
    "React developer Ethiopia", "Next.js Ethiopia", "tech startup Ethiopia",
    "best software company Ethiopia", "app development Addis Ababa",
    // Amharic transliterated
    "awra tech ethiopia", "awratech addis ababa", "ye ethiopia software company",
    // Amharic
    "አዋራ ቴክ", "የኢትዮጵያ ሶፍትዌር ኩባንያ", "ድህረ ገጽ ልማት", "የሞባይል አፕ ልማት",
    "አዲስ አበባ ቴክኖሎጂ", "ዲጂታል ማርኬቲንግ ኢትዮጵያ",
  ],
  authors: [{ name: "Awra Tech", url: BASE_URL }],
  creator: "Awra Tech",
  publisher: "Awra Tech",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": BASE_URL,
      "am": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Awra Tech",
    title: "Awra Tech | Web, Mobile & Software Development in Ethiopia",
    description:
      "Awra Tech — Ethiopia's premier software company. Web development, mobile apps, UI/UX & digital marketing. አዋራ ቴክ - የኢትዮጵያ ቁንጮ የቴክኖሎጂ ኩባንያ።",
    images: [
      {
        url: "/images/awra-icon.png",
        width: 1200,
        height: 630,
        alt: "Awra Tech - Ethiopian Software Company",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awra Tech | Web, Mobile & Software Development in Ethiopia",
    description:
      "Awra Tech — Ethiopia's premier software company. Web development, mobile apps, UI/UX & digital marketing.",
    images: ["/images/awra-icon.png"],
    creator: "@awratech",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/awra-icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/images/awra-icon.png",
  },
  verification: {
    google: "qNJipvdFbqWGYGqC1XbGOlumSeIVZNMV2qhd3WuU8ik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Awra Tech",
              "alternateName": ["አዋራ ቴክ", "AwraTech"],
              "url": "https://awratech.com",
              "logo": "https://awratech.com/images/awra-icon.png",
              "image": "https://awratech.com/images/awra-icon.png",
              "description": "Awra Tech is Ethiopia's leading software company specializing in web development, mobile apps, UI/UX design, and digital marketing.",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+251978210810",
                  "contactType": "customer service",
                  "email": "contact@awratech.com"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/awratech",
                "https://github.com/AwraTech",
                "https://youtube.com/@awratech",
                "https://www.instagram.com/awratech",
                "https://tiktok.com/@awra.tech"
              ],
              "knowsLanguage": ["en", "am"],
              "areaServed": "ET",
              "serviceType": ["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "Software Development"]
            })
          }}
        />
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
