import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://publicservicecovenant.org"),
  title: "PSC — Public Service Covenant",
  description:
    "India deserves leaders who serve, not leaders who loot. Assets frozen in office. Retire at 60. No corruption. Join the movement.",
  openGraph: {
    title: "PSC — Public Service Covenant",
    description: "Good people should not stay silent. India deserves leaders who serve, not leaders who loot.",
    url: "https://publicservicecovenant.org",
    siteName: "PSC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Public Service Covenant — Service, not power.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PSC — Public Service Covenant",
    description: "Good people should not stay silent. India deserves leaders who serve, not leaders who loot.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
