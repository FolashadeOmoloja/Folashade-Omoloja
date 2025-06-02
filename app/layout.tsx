import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folashade Omoloja",
  description: `A front end developer portfolio showing all of Folashade's works and her experience`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
