import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "./siteConfig";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cooperHewitt = localFont({
  src: "../public/CooperHewitt-Medium.ttf",
  variable: "--font-cooper-hewitt",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MCU Doomsday Clock | Avengers: Doomsday Countdown",
  description:
    "A personalized countdown for Naveen Sunilkumar's last day at Freshworks on January 6, 2027.",
  keywords: [
    "Avengers Doomsday",
    "MCU",
    "Marvel",
    "Countdown",
    "Doomsday Clock",
    "Avengers 5",
    "Marvel Cinematic Universe",
    "December 2026",
    "Abhishek Kumar",
    "Abhishek KMaar",
    "KMaar",
    "Marvel Countdown Timer",
    "Avengers Doomsday Release Date",
    "MCU Phase 6",
    "Doctor Doom",
    "Robert Downey Jr",
    "Avengers 2026",
    "Marvel Movie Countdown",
    "Doomsday Movie",
    "Avengers Secret Wars",
    "MCU Multiverse",
    "Marvel Studios",
    "Superhero Movie",
    "Comic Book Movie",
  ],
  authors: [{ name: "KMaar", url: "https://kmaar.vercel.app" }],
  creator: "KMaar",
  twitter: {
    card: "summary_large_image",
    creator: "@kmaar44",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cooperHewitt.variable}`}>
        {children}
      </body>
    </html>
  );
}
