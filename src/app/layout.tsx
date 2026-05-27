import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Riccardo Colombo — Systems Architect & Developer Portfolio",
  description:
    "Portfolio of Riccardo Colombo, a senior developer crafting high-performance, tactile interfaces for complex technical systems.",
  authors: [{ name: "Riccardo Colombo" }],
  openGraph: {
    title: "Riccardo Colombo — Developer Portfolio",
    description:
      "Selected works in distributed systems, component libraries, and low-latency visualization tools.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
