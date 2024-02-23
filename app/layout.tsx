import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "@/features/provider";

export const metadata: Metadata = {
  title: "RadAI - AI Doctor for Radiologists",
  description: " RadAI is an AI Doctor for Radiologists. It is a gateway to instant radiology insights and AI-assisted radiology diagnosis app in Africa, It is your AI Doctor Companion.",
  icons: {
    icon: 'https://ik.imagekit.io/ubdvpx7xd0j/Radai/Svg%20Hash%20(2)_nt_EDDYiS.png?updatedAt=1708601573467',
    apple: 'https://ik.imagekit.io/ubdvpx7xd0j/Radai/Svg%20Hash%20(2)_nt_EDDYiS.png?updatedAt=1708601573467',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
