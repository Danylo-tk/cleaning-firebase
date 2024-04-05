import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleaning app",
  description: "Cleaning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-[100vh] justify-center">
          <div className={`w-full max-w-[90%]`}>{children}</div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-[90%]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
