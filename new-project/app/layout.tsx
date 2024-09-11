import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tara Ghasemi Monfared Rad",
  description: "This is Tara Ghasemi Monfared Rad's Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
