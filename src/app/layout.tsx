// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/component/layoutwrapper/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundsOnTime - Your Trusted Financial Partner",
  description:
    "Comprehensive financial solutions for businesses and individuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
