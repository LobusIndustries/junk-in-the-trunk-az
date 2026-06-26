import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Junk in the Trunk AZ | Junk Removal Gilbert, Mesa, Chandler, Queen Creek",
  description: "Fast, affordable junk removal in Gilbert, Mesa, Chandler, and Queen Creek AZ. Furniture, appliances, cleanouts, and more. Call 480-234-9404.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
