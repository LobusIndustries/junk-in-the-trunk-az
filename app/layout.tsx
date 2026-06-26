import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junk in the Trunk AZ | Junk Removal Gilbert, Mesa, Chandler, Queen Creek",
  description: "Fast, affordable junk removal in Gilbert, Mesa, Chandler, and Queen Creek AZ. Furniture, appliances, cleanouts, and more. Call 480-234-9404.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
