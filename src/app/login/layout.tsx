import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./styles.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatCoin | Bejelentkezés",
  description: "A fiatalos gazdálkodás",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="flex items-center justify-center h-screen">
        <main className={rubik.className + " " + "bg-white rounded-4xl container py-20 px-16"}>
          {children}
        </main>
      </body>
    </html>
  );
}
