import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects & Portfolio | Awra Tech",
  description: "Explore the digital products, web apps, and enterprise platforms built by Awra Tech — Ethiopia's leading software company. ያከናወንናቸው ፕሮጀክቶች።",
  alternates: { canonical: "https://awratech.com/projects" },
  openGraph: {
    title: "Projects & Portfolio | Awra Tech",
    description: "Explore web applications, healthcare systems, real estate portals, and digital tools built by Awra Tech.",
    url: "https://awratech.com/projects",
    images: [{ url: "/favicon.png", alt: "Awra Tech Projects" }],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

