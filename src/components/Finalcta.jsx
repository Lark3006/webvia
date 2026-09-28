import { WHATSAPP_LINK_GENERAL } from '../constants'
import './Finalcta.css'

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2>Punya bisnis yang ingin dibuatkan website?</h2>
        <a className="btn btn--primary" href={WHATSAPP_LINK_GENERAL} target="_blank" rel="noopener noreferrer">
          Mulai Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  )
}

export default FinalCta