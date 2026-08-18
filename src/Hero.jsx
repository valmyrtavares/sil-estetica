import React from 'react'

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Aqui, cada atendimento considera não apenas aquilo que você vê no <span>espelho</span>, mas também como você está se <span>sentindo</span>.
        </h1>
        <p className="hero-subtitle">
          O equilíbrio perfeito entre o cuidado com a sua pele e a harmonia do seu corpo e mente.
        </p>
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
