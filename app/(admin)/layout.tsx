import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Fuel! - Admin",
  description: "The best way to get your content out there. - Admin",
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
