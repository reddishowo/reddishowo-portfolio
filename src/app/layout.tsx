import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Reddishowo",
  description: "Farriel Arrianta - Portfolio Website ",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}