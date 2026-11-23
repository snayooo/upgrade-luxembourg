import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#accueil">UPGRADE <span>LUXEMBOURG</span></a>
      <p>Urban Projects · Greener Assets · Real Estate Advisory</p>
      <a href="#accueil">Retour en haut <ArrowUpRight size={14} /></a>
      <small>© {new Date().getFullYear()} Upgrade Luxembourg. Tous droits réservés.</small>
    </footer>
  );
}
