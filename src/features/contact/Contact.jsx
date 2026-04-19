import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("santiagomachacon93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">// contacto</p>
        <h2 className="section-title">Hablemos <span>juntos</span></h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__text">
              Estoy disponible para oportunidades laborales, freelance o colaboraciones. Si tienes un proyecto en mente o simplemente quieres conectar, ¡escríbeme!
            </p>

            <div className="contact__methods">
              <div className="contact-method">
                <span className="contact-method__icon">📧</span>
                <div>
                  <span className="contact-method__label">Email</span>
                  <div className="contact-method__value-row">
                    <span className="contact-method__value">santiagomachacon93@gmail.com</span>
                    <button className="copy-btn" onClick={copyEmail}>
                      {copied ? "✓ copiado" : "copiar"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-method__icon">📞</span>
                <div>
                  <span className="contact-method__label">Teléfono / WhatsApp</span>
                  <a href="https://wa.me/573022033146" target="_blank" rel="noopener noreferrer" className="contact-method__value contact-method__value--link">
                    +57 302 203 3146
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-method__icon">📍</span>
                <div>
                  <span className="contact-method__label">Ubicación</span>
                  <span className="contact-method__value">Turbaco, Bolívar, Colombia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__actions">
            <a
              href="mailto:santiagomachacon93@gmail.com"
              className="cta-card cta-card--primary"
            >
              <span className="cta-card__icon">✉️</span>
              <div>
                <span className="cta-card__title">Enviar email</span>
                <span className="cta-card__sub">Te respondo en menos de 24h</span>
              </div>
              <svg className="cta-card__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>

            <a
              href="https://wa.me/573022033146"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-card cta-card--whatsapp"
            >
              <span className="cta-card__icon">💬</span>
              <div>
                <span className="cta-card__title">WhatsApp</span>
                <span className="cta-card__sub">Chat directo conmigo</span>
              </div>
              <svg className="cta-card__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact__footer">
          <div className="footer-line"></div>
          <p className="footer-text">
            Diseñado y construido por <strong>Santiago Machacon</strong> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
