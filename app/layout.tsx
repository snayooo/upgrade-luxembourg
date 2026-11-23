import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upgrade Luxembourg | Gestion de projets immobiliers",
  description:
    "Upgrade Luxembourg accompagne vos projets immobiliers et optimise la valeur de vos actifs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
