import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="intro section-pad" id="expertise">
      <div className="section-kicker"><span>01 / QUI SOMMES-NOUS</span><span>UNE EXPERTISE ENGAGÉE</span></div>
      <div className="intro-layout">
        <div className="intro-heading">
          <p className="eyebrow">NOTRE EXPERTISE</p>
          <h2>Donner forme à vos ambitions <em>immobilières.</em></h2>
          <a className="text-link" href="#services">Découvrir notre approche <ArrowUpRight size={16} /></a>
        </div>
        <div className="intro-content">
          <p className="large-copy">
            Bienvenue chez Upgrade Luxembourg, votre partenaire privilégié pour une gestion de projet immobilier tournée vers vos objectifs.
          </p>
          <p>
            Que ce soit pour des développements résidentiels, hôteliers, hospitaliers ou l’asset management de bureaux, nous transformons vos ambitions en réalisations concrètes. Découvrez notre approche axée sur la qualité et l’innovation, et laissez-nous vous accompagner vers le succès de vos projets.
          </p>
          <div className="expertise-image">
            <Image src="/images/interior-projects.png" alt="Espaces intérieurs et projets immobiliers" fill sizes="(max-width: 800px) 90vw, 48vw" />
          </div>
        </div>
      </div>
      <div className="expertise-strip">
        <span>GESTION DE PROJET</span><span>ASSET MANAGEMENT</span><span>CONSEIL IMMOBILIER</span><span>DÉVELOPPEMENT</span>
      </div>
    </section>
  );
}
