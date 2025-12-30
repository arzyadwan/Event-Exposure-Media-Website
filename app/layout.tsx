import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Kita load 2 font: Oswald (Judul) & Inter (Body)
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Load Font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "VANGUARD | Corporate Event Architects",
  description: "High-impact corporate event organizer based in Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-black text-white antialiased selection:bg-yellow-500 selection:text-black`}>
        
        {/* Navbar Global */}
        <Navbar />

        {/* Konten Halaman Berubah-ubah di sini */}
        {children}

        {/* Footer Global */}
        <Footer />
        
      </body>
    </html>
  );
}