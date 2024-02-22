import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RadAI - AI Doctor for Radiologists",
  description: " RadAI is an AI Doctor for Radiologists. It is a gateway to instant radiology insights. It is your AI Doctor Companion.",
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
