import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header container">
      <div className="logo">
        <img src="/image/Logo_transparent.png" alt="Logo Sil" className="logo-image" />
        <div className="logo-text">Terapias Integrativas</div>
        <div className="logo-subtext">Energia & Estética</div>
      </div>
      
      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#tratamentos" onClick={() => setIsMenuOpen(false)}>Tratamentos</a>
        <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre mim</a>
        <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
        <button className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Agendar agora
        </button>
      </nav>
    </header>
  )
}

export default Header
