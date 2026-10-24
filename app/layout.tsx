import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = `${profile.name}, ${profile.role}`;
const description = `${profile.tagline} Based in ${profile.location}. ${profile.availability}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name, url: profile.linkedin }],
  keywords: [
    "QA Engineer",
    "Test Automation",
    "Cypress",
    "API Testing",
    "Jest",
    "Postman",
  ],
  openGraph: { type: "website", title, description, siteName: profile.name },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f5f6f8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
