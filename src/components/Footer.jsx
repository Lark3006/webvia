import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2777E8" />
                <stop offset="1" stopColor="#20C7C7" />
              </linearGradient>
            </defs>
            <path d="M2 6 L9 24 L15 11 L21 24 L28 6" stroke="url(#footerLogoGrad)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>webvia</span>
        </div>

        <nav className="footer__links">
          <a href="#portfolio">Karya</a>
          <a href="#layanan">Layanan</a>
          <a href="#harga">Harga</a>
          <a href="#proses">Proses</a>
        </nav>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Webvia. Jasa pembuatan website untuk UMKM & bisnis lokal.
        </p>
      </div>
    </footer>
  )
}

export default Footer