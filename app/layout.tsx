import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serverless Todo App",
  description: "A demo of in-memory storage limitations in serverless environments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
