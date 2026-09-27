import { useState } from 'react'
import './Navbar.css'

const WHATSAPP_LINK = "https://wa.me/+6285789021996?text=Halo%20Webvia%2C%20saya%20ingin%20konsultasi%20website%20untuk%20bisnis%20saya."

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Webvia">
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navLogoGrad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2777E8" />
                <stop offset="1" stopColor="#20C7C7" />
              </linearGradient>
            </defs>
            <path d="M2 6 L9 24 L15 11 L21 24 L28 6" stroke="url(#navLogoGrad)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>webvia</span>
        </a>

        <div className="navbar__links">
          <a href="#portfolio">Karya</a>
          <a href="#layanan">Layanan</a>
          <a href="#harga">Harga</a>
        </div>

        <a className="navbar__cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Mulai Konsultasi
        </a>

        <button
          className="navbar__toggle"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && (
        <div className="navbar__mobile-menu" data-testid="mobile-menu">
          <a href="#portfolio" onClick={closeMenu}>Karya</a>
          <a href="#layanan" onClick={closeMenu}>Layanan</a>
          <a href="#harga" onClick={closeMenu}>Harga</a>
          <a
            className="navbar__mobile-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Mulai Konsultasi
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar