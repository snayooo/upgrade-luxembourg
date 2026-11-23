import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-topline">
        <span>URBAN PROJECTS</span>
        <span className="topline-dot" />
        <span>GREENER ASSETS</span>
        <span className="topline-dot" />
        <span>REAL ESTATE ADVISORY</span>
      </div>
      <div className="hero-grid">
        <div className="hero-photo hero-photo-left">
          <Image src="/images/luxembourg-building.png" alt="Immeuble au cœur de Luxembourg" fill priority sizes="(max-width: 700px) 42vw, 25vw" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">UPGRADE LUXEMBOURG · IMMOBILIER</p>
          <h1>L’excellence en gestion de projet et en accompagnement du Maître d’Ouvrage.</h1>
          <p className="hero-lead">
            Nous transformons vos ambitions immobilières en réalisations concrètes, avec exigence, vision et engagement.
          </p>
          <a className="button button-dark" href="#services">Découvrir nos services <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-photo hero-photo-right">
          <Image src="/images/green-assets.png" alt="Architecture urbaine et panneaux solaires" fill priority sizes="(max-width: 700px) 42vw, 25vw" />
        </div>
        <div className="hero-photo hero-photo-wide">
          <Image src="/images/eu-building.png" alt="Bâtiment contemporain et drapeaux européens" fill priority sizes="(max-width: 700px) 90vw, 40vw" />
        </div>
        <div className="hero-photo hero-photo-small">
          <Image src="/images/architecture.png" alt="Détail d'une architecture contemporaine" fill priority sizes="(max-width: 700px) 40vw, 22vw" />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-logo">
          <Image src="/images/upgrade-logo.png" alt="Upgrade" width={220} height={110} priority />
        </div>
        <p>Des projets mieux pensés.<br /><strong>Une valeur durable.</strong></p>
        <a href="#expertise" className="scroll-cue"><ArrowDown size={16} /> Faire défiler</a>
      </div>
    </section>
  );
}
