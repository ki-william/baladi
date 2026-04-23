import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Baladi — Turning $32B of Diaspora Love into Productive Egyptian Capital",
  description:
    "Baladi is the mobile-first infrastructure that turns every remittance into an optional investment into a verified small business in the sender's own village. Hyperlocal, family-mediated, diaspora-to-SME investment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased noise">{children}</body>
    </html>
  );
}
