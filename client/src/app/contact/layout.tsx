import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Awra Tech",
  description: "Get in touch with Awra Tech — Ethiopia's leading software company. አውራ ቴክን ያድርሱ። contact@awratech.com | +251 978 210 810",
  alternates: { canonical: "https://awratech.com/contact" },
  openGraph: {
    title: "Contact Us | Awra Tech",
    description: "Reach out to Awra Tech for web, mobile & software development services in Ethiopia.",
    url: "https://awratech.com/contact",
    images: [{ url: "/images/awra-icon.png", alt: "Awra Tech Contact" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
