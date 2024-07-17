import type { Metadata } from "next";

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
      <body className="flex justify-center">
        <div className="container flex flex-col items-center">
          <h1>Bejelentkezés</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
