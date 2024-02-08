import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const popPin = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyaw Thet Wam",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popPin.className}>{children}</body>
    </html>
  );
}
