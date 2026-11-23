
"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Une erreur est survenue."
        );
      }

      form.reset();
      setStatus("sent");

    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer votre message."
      );
    }
  }

  return (
    <section className="contact section-pad" id="contact">

      <div className="section-kicker">
        <span>04 / CONTACT</span>
        <span>CONSTRUISONS ENSEMBLE</span>
      </div>

      <div className="contact-layout">

        <div className="contact-info">
          <p className="eyebrow">CONTACTEZ-NOUS</p>

          <h2>
            Parlons de
            <br />
            <em>votre projet.</em>
          </h2>

          <p className="contact-intro">
            Vous avez un projet immobilier ou souhaitez
            échanger sur la valorisation de vos actifs ?
            Nous serions ravis d'en discuter.
          </p>

          <div className="contact-details">
            <a href="mailto:cyril.dejonghe@upgrade.lu">
              cyril.dejonghe@upgrade.lu
              <ArrowUpRight size={15} />
            </a>

            <a href="tel:+352691109543">
              +352 691 109 543
              <ArrowUpRight size={15} />
            </a>

            <p>
              30 rue de Clausen
              <br />
              L-1342 Luxembourg
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-heading">
            <span>ÉCRIVEZ-NOUS</span>
            <span>TOUS LES CHAMPS SONT REQUIS</span>
          </div>

          <label>
            Nom et prénom
            <input
              name="name"
              type="text"
              placeholder="Votre nom"
              maxLength={160}
              required
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              placeholder="nom@entreprise.com"
              maxLength={254}
              required
            />
          </label>

          <label>
            Société
            <input
              name="company"
              type="text"
              placeholder="Nom de votre société"
              maxLength={160}
              required
            />
          </label>

          <label>
            Votre message
            <textarea
              name="message"
              rows={4}
              maxLength={8000}
              placeholder="Parlez-nous de votre projet..."
              required
            />
          </label>

          <button
            className="button button-dark submit-button"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Envoi en cours..."
              : "Envoyer le message"}

            {status === "sending" ? (
              <LoaderCircle size={16} className="spin" />
            ) : (
              <ArrowUpRight size={16} />
            )}
          </button>

          {status === "sent" && (
            <p className="form-success">
              <CheckCircle2 size={16} />
              Votre message a bien été envoyé. Merci !
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              <AlertCircle size={16} />
              {errorMessage}
            </p>
          )}

          <p className="form-legal">
            Vos informations sont utilisées uniquement
            pour répondre à votre demande.
          </p>

        </form>
      </div>
    </section>
  );
}
