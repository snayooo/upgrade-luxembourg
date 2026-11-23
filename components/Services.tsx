import { ArrowUpRight } from "lucide-react";

const projectServices = [
  {
    number: "01",
    title: "Résidentiel",
    text: "De la conception à la livraison, nous gérons des projets résidentiels de toutes tailles, en veillant à la qualité, au respect des délais et des budgets. Nous créons des espaces de vie où il fait bon vivre.",
  },
  {
    number: "02",
    title: "Hôtellerie",
    text: "Nous accompagnons les développeurs d’hôtels dans la réalisation de leurs établissements, en optimisant chaque étape du projet pour garantir une expérience client exceptionnelle et une rentabilité accrue.",
  },
  {
    number: "03",
    title: "Santé et hôpitaux",
    text: "La gestion de projets pour le secteur de la santé exige une expertise particulière. Nous sommes qualifiés pour mener à bien des constructions et rénovations d’hôpitaux et de cliniques, avec une attention particulière aux normes et à la fonctionnalité.",
  },
  {
    number: "04",
    title: "Bureaux et espaces professionnels",
    text: "Que ce soit pour de nouvelles constructions ou des rénovations, nous gérons la création d’espaces de travail modernes et performants, adaptés aux besoins de nos clients et des locataires.",
  },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-kicker"><span>02 / NOS DOMAINES D’INTERVENTION</span><span>EXPERTISE IMMOBILIÈRE</span></div>
      <div className="services-heading">
        <div>
          <p className="eyebrow">NOS SERVICES</p>
          <h2>Une expertise au service<br /><em>de chaque projet.</em></h2>
        </div>
        <p>De la première réflexion à la valorisation de vos actifs, nous vous accompagnons à chaque étape.</p>
      </div>
      <div className="service-group-title"><span>01</span><h3>Projets immobiliers</h3><i /></div>
      <div className="service-grid">
        {projectServices.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top"><span>{service.number}</span><ArrowUpRight size={17} /></div>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <div className="asset-section">
        <div className="asset-photo">
          <div className="asset-photo-image" />
          <span>GREENER ASSETS · REAL ESTATE</span>
        </div>
        <div className="asset-content">
          <div className="service-group-title"><span>02</span><h3>Asset Management</h3><i /></div>
          <article className="asset-item">
            <span className="asset-index">A</span>
            <div><h4>Optimisation de portefeuilles</h4><p>Nous offrons des services d’asset management pour des portefeuilles de bureaux, notamment pour des family offices. Notre objectif est de maximiser la valeur de vos actifs grâce à une gestion proactive et stratégique.</p></div>
          </article>
          <article className="asset-item">
            <span className="asset-index">B</span>
            <div><h4>Conseil et stratégie</h4><p>Bénéficiez de nos conseils experts pour élaborer des stratégies d’investissement immobilier adaptées à vos objectifs à long terme, assurant croissance et stabilité.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
