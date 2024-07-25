import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import HeaderLoggedIn from "@/components/layout/HeaderLoggedIn";

const inter = Inter({ subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlinks",
  description: "Your favorite application for link sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSans.className}`}>
        <div className="main-content">
          <HeaderLoggedIn />
          {children}
        </div>
      </body>
    </html>
  );
}
