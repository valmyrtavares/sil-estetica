import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header container">
      <div className="logo">
        <div className="logo-icon-svg">
          <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Círculo incompleto */}
            <path d="M 20 80 A 42 42 0 1 1 80 80" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Linha fluida representando energia/corpo */}
            <path d="M 45 90 C 35 65, 30 40, 50 20 C 65 5, 85 25, 60 45 C 45 60, 45 75, 55 90" fill="none" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round"/>
            {/* Ponto de luz / mente */}
            <circle cx="50" cy="14" r="2.5" fill="var(--primary)"/>
            {/* Texto Sil */}
            <text x="50" y="70" fontFamily="'Great Vibes', cursive" fontSize="48" fill="var(--primary)" textAnchor="middle">Sil</text>
          </svg>
        </div>
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
