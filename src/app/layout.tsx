import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme Provider",
  description: "Next Themes with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-light-500 dark:bg-dark-500`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
