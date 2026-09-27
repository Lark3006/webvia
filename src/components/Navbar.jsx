import { useState } from 'react'
import './Navbar.css'
import Logo from './Logo'
import { WHATSAPP_LINK_GENERAL } from '../constants'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Webvia">
            <Logo />
            <span>webvia</span>
        </a>

        <div className="navbar__links">
          <a href="#portfolio">Karya</a>
          <a href="#layanan">Layanan</a>
          <a href="#harga">Harga</a>
        </div>

        <a className="navbar__cta" href={WHATSAPP_LINK_GENERAL} target="_blank" rel="noopener noreferrer">
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
            href={WHATSAPP_LINK_GENERAL}
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