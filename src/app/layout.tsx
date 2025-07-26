import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/devlink/global.css";
import { DevLinkProvider } from '@/devlink/DevLinkProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REVREBEL REBELstyle",
  description: "REVREBEL Component Library using Builder.io, Xano, DevLink, and Webflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DevLinkProvider>{children}</DevLinkProvider>
      </body>
    </html>
  );
}
