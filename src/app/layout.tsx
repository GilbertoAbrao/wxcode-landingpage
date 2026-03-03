import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WXCode — Modernize seu Legado WinDev com IA",
  description:
    "Transforme 3 anos de projeto em 6 meses. Um desenvolvedor, 42x mais produtivo. Plataforma de modernização de legado WinDev com IA.",
  keywords: [
    "WinDev",
    "modernização",
    "legado",
    "migração",
    "IA",
    "conversão de código",
    "WXCode",
  ],
  openGraph: {
    title: "WXCode — Modernize seu Legado WinDev com IA",
    description:
      "Um desenvolvedor. 42x mais produtivo. Transforme 3 anos de projeto em 6 meses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
