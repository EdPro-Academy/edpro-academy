import type { Metadata } from "next";
import "./globals.css";
// Root layout - locale-specific layouts handle html/body tags

export const metadata: Metadata = {
  title: {
    default: "EdPro Academy | KHDA-Recognized Training Institute | Dubai",
    template: "%s | EdPro Academy",
  },
  description:
    "EdPro Academy is a KHDA-recognized training institute in Dubai offering professional development programs in-person, online, and blended formats.",
  metadataBase: new URL("https://edpro.academy"),
  applicationName: "EdPro Academy",
  keywords: [
    "EdPro Academy",
    "KHDA",
    "training institute Dubai",
    "professional development UAE",
    "educational leadership",
    "online courses Dubai",
    "أكاديمية إيدبرو",
    "معهد تدريب دبي",
  ],
  authors: [{ name: "EdPro Education Services", url: "https://edpro.me" }],
  creator: "EdPro Education Services",
  publisher: "EdPro Academy",
  openGraph: {
    title: "EdPro Academy | KHDA-Recognized Training Institute",
    description:
      "Professional development programs recognized by KHDA, Dubai. Enroll in our in-person, online, and blended learning programs.",
    url: "https://edpro.academy",
    siteName: "EdPro Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/edpro-og.png",
        width: 1200,
        height: 630,
        alt: "EdPro Academy - KHDA Recognized Training Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EdPro Academy | KHDA-Recognized Training Institute",
    description:
      "Professional development programs recognized by KHDA, Dubai.",
    images: ["/images/edpro-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
