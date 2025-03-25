import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ReactQueryProvider from "@/components/query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stacks Application",
  description: "Basic transaction sorting app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en-NL">
        <body className={`antialiased ${inter.className}`}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
