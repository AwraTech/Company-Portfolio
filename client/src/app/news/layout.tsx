import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News & Blog | Awra Tech",
  description: "Latest news, updates and blog posts from Awra Tech — Ethiopia's leading software company. አውራ ቴክ ዜናዎች እና ብሎግ።",
  alternates: { canonical: "https://awratech.com/news" },
  openGraph: {
    title: "News & Blog | Awra Tech",
    description: "Stay updated with the latest from Awra Tech — Ethiopia's top software company.",
    url: "https://awratech.com/news",
    images: [{ url: "/images/awra-icon.png", alt: "Awra Tech News" }],
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
