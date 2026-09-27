import './Footer.css'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
            <Logo size={24} />
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