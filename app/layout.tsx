import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CurvedSpace Investment Services - Strategic Treasury Management & Investor Services",
  description: "Strategic Treasury Management & Investor Services for Growing Organizations. Expert treasury management and investor relations solutions tailored to your needs.",
  keywords: ["treasury management services", "fractional treasurer", "cash flow management", "investor relations services", "treasury consulting", "private lending treasury services", "Bay Area treasury services"],
  authors: [{ name: "CurvedSpace Investment Services" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
