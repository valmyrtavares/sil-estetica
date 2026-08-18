import React from 'react'

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Uma <span>clínica completa</span><br />
          e estruturada que<br />
          você pode confiar.
        </h1>
        <p className="hero-subtitle">
          O equilíbrio perfeito entre o cuidado com a sua pele e a harmonia do seu corpo e mente.
        </p>
        <button className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Agendar agora
        </button>
      </div>
      
      <div className="hero-image-wrapper">
        <div className="hero-image-bg"></div>
        <div className="btn-floating btn-float-1">Terapias Corporais</div>
        <div className="btn-floating btn-float-2">Terapias Energéticas</div>
        <img src="/therapist.jpg" alt="Sil Terapias Integrativas" className="hero-image" />
      </div>
    </section>
  )
}

export default Hero
