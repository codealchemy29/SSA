import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ssacademy.com"),

  title: {
    default: "SSA Academy",
    template: "%s | SSA Academy",
  },

  description:
    "SSA Academy is a premier tennis academy dedicated to developing future champions through world-class coaching, facilities, and programs.",

  keywords: [
    "SSA Academy",
    "Tennis Academy",
    "Hunter Valley Tennis",
    "Tennis Coaching",
    "Professional Tennis Training",
    "Junior Tennis Programs",
    "Sports Academy",
  ],

  authors: [
    {
      name: "SSA Academy",
    },
  ],

  creator: "SSA Academy",

  publisher: "SSA Academy",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SSA Academy",
    description:
      "World-class tennis academy offering coaching, tournaments, facilities, and athlete development programs.",
    url: "https://www.ssacademy.com",
    siteName: "SSA Academy",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSA Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SSA Academy",
    description:
      "World-class tennis academy offering coaching, tournaments, facilities, and athlete development programs.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.ssacademy.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "SSA Academy",
  description:
    "World-class tennis academy with professional coaching and facilities.",
  url: "https://www.ssacademy.com",
  logo: "https://www.ssacademy.com/logo.png",
  telephone: "+91-5642589752",
  email: "info@ssagroup.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Wills Hill Road",
    addressLocality: "Lovedale",
    addressRegion: "NSW",
    addressCountry: "Australia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }}
  />

        <Navbar />

       <main className="pt-16 lg:pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
