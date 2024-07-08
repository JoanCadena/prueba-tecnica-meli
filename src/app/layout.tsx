import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "@/components/SearchBar/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MELI App",
  description: "Test Practico - MELI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#eeeeee" }}>
        <SearchBar />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24, paddingBottom:48 }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
