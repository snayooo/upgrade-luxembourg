import Image from "next/image";

export default function Founder() {
  return (
    <section className="founder section-pad">
      <div className="founder-image">
        <Image src="/images/street-building.png" alt="Façades d'immeubles en ville" fill sizes="(max-width: 800px) 100vw, 48vw" />
        <span className="image-caption">L’IMMOBILIER, AVEC UNE VISION À LONG TERME</span>
      </div>
      <div className="founder-copy">
        <p className="eyebrow">NOTRE HISTOIRE</p>
        <h2>Une approche humaine. <em>Une vision durable.</em></h2>
        <p>
          Upgrade Luxembourg s’impose comme un acteur fiable dans la gestion de projets immobiliers au Luxembourg. Notre croissance est le fruit d’un engagement constant envers l’excellence, l’innovation et la satisfaction client. Nous sommes fiers de notre parcours et des partenariats durables que nous avons tissés au fil des ans.
        </p>
        <div className="founder-note">
          <span className="note-number">18<span>+</span></span>
          <span>années d’expérience dans<br />l’immobilier luxembourgeois</span>
        </div>
        <div className="founder-person">
          <div className="person-line" />
          <div>
            <strong>Cyril Dejonghe</strong>
            <span>Fondateur · Ingénieur IMT Atlantique</span>
          </div>
        </div>
        <p className="founder-detail">
          Fort de 18 ans d’expérience, il a évolué de la construction à la gestion d’actifs en passant par le management de projets, avec une approche pragmatique et collaborative. Il allie vision stratégique et exécution opérationnelle pour créer de la valeur durable, en pilotant des projets immobiliers vers l’efficacité, la résilience et la durabilité.
        </p>
      </div>
    </section>
  );
}
