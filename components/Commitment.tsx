import { ShieldCheck, Handshake, Leaf } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Qualité et fiabilité", text: "Chaque projet est mené avec le plus haut niveau d’exigence, garantissant des résultats fiables et durables. Nous nous engageons à la transparence et à l’efficacité à chaque étape." },
  { icon: Handshake, title: "Partenariat durable", text: "Nous construisons des relations solides avec nos clients, basées sur la confiance et une compréhension approfondie de leurs besoins. Atteindre vos objectifs est notre priorité." },
  { icon: Leaf, title: "Vision responsable", text: "Nous intégrons les enjeux de résilience et de durabilité dans notre manière de penser et de piloter les projets immobiliers." },
];

export default function Commitment() {
  return (
    <section className="commitment section-pad">
      <div className="section-kicker"><span>03 / NOTRE ENGAGEMENT</span><span>AU-DELÀ DU PROJET</span></div>
      <div className="commitment-heading">
        <p className="eyebrow">NOS PRINCIPES</p>
        <h2>La confiance se construit<br /><em>à chaque étape.</em></h2>
      </div>
      <div className="values-grid">
        {values.map(({ icon: Icon, title, text }, index) => (
          <article className="value-card" key={title}>
            <span className="value-number">0{index + 1}</span>
            <Icon size={24} strokeWidth={1.4} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="project-cta">
        <div>
          <p className="eyebrow">VOS PROJETS, NOTRE EXPERTISE</p>
          <h2>Et si nous donnions<br /><em>vie à votre projet ?</em></h2>
        </div>
        <a className="button button-light" href="#contact">Parlons de votre projet <span>↗</span></a>
      </div>
    </section>
  );
}
