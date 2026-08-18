import React from 'react'

function Tratamentos() {
  const servicosEstetica = [
    "Limpeza de Pele",
    "Peeling Enzimático",
    "Blefaroplastia sem Corte",
    "Microagulhamento",
    "Ozonioterapia Estética",
    "Detox Corporal",
    "Drenagem Linfática",
    "Crioterapia",
    "Lipossagem"
  ]

  const terapiasCorporais = [
    "Massagem Antiestresse",
    "Massagem Craniofacial",
    "Liberação Miofascial",
    "Ventosaterapia",
    "Reflexologia",
    "SPA dos Pés"
  ]

  const terapiasEnergeticas = [
    "Barras de Access",
    "Facelift Energético",
    "Corrigindo a Visão",
    "MTVSS",
    "Cura Frequencial Evolutiva",
    "Reiki"
  ]

  return (
    <section id="tratamentos" className="tratamentos-section">
      <div className="tratamentos-banner">
        <h2>Tratamentos</h2>
      </div>
      
      <div className="container tratamentos-content">
        <div className="tratamentos-image-wrapper">
          <div className="tratamentos-image-bg"></div>
          <img src="/treatment.jpg" alt="Tratamentos de Estética Integrativa" className="tratamentos-image" />
        </div>
        
        <div className="tratamentos-list-wrapper">
          <h3 className="tratamentos-list-title">1. ESTÉTICA INTEGRATIVA</h3>
          <ul className="tratamentos-list">
            {servicosEstetica.map((servico, index) => (
              <li key={index}>
                <span className="bullet-point"></span>
                {servico}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container tratamentos-content reversed">
        <div className="tratamentos-list-wrapper">
          <h3 className="tratamentos-list-title">2. TERAPIAS INTEGRATIVAS</h3>
          
          <h4 className="sub-list-title">Terapias Corporais</h4>
          <ul className="tratamentos-list">
            {terapiasCorporais.map((servico, index) => (
              <li key={index}>
                <span className="bullet-point"></span>
                {servico}
              </li>
            ))}
          </ul>

          <h4 className="sub-list-title mt-4">Terapias Energéticas</h4>
          <ul className="tratamentos-list">
            {terapiasEnergeticas.map((servico, index) => (
              <li key={index}>
                <span className="bullet-point"></span>
                {servico}
              </li>
            ))}
          </ul>
        </div>

        <div className="tratamentos-image-wrapper">
          <div className="tratamentos-image-bg bg-reverse"></div>
          <img src="/therapy.jpg" alt="Terapias Integrativas" className="tratamentos-image img-reverse" />
        </div>
      </div>
    </section>
  )
}

export default Tratamentos
