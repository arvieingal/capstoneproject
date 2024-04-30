import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyCommunityHQ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href= 
"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" 
          rel="stylesheet" /> 
    <link href= 
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
          rel="stylesheet" /> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
