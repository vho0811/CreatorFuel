import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
export const metadata: Metadata = {
  title: "Creator Fuel!",
  description: "The best way to get your content out there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
      <SanityLive/>
    </html>
    </ClerkProvider>
  );
}
