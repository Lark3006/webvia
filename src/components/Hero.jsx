import './Hero.css'

const WHATSAPP_LINK = "https://wa.me/+6285789021996?text=Halo%20Webvia%2C%20saya%20ingin%20konsultasi%20website%20untuk%20bisnis%20saya."

function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>
            Website yang membuat bisnis Anda terlihat siap dipercaya pelanggan.
          </h1>
          <p className="hero__lede">
            Webvia membuatkan website untuk UMKM, bisnis lokal, dan personal brand — rapi,
            cepat diakses, dan jelas isinya, tanpa Anda perlu mengurus sisi teknisnya sendiri.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Mulai Konsultasi
            </a>
            <a className="btn btn--secondary" href="#portfolio">
              Lihat Portfolio
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__mockup">
            <div className="hero__mockup-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="hero__mockup-body">
              <div className="mockup-line mockup-line--w1"></div>
              <div className="mockup-line mockup-line--w2"></div>
              <div className="mockup-block"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero