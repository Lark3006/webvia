import './Finalcta.css'

const WHATSAPP_LINK = "https://wa.me/GANTI_NOMOR?text=Halo%20Webvia%2C%20saya%20ingin%20konsultasi%20website%20untuk%20bisnis%20saya."

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2>Punya bisnis yang ingin dibuatkan website?</h2>
        <a className="btn btn--primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Mulai Konsultasi via WhatsApp
        </a>
      </div>
    </section>
  )
}

export default FinalCta