import React from 'react'

function Sobre() {
  const formacao = [
    "Estética e Cosmética",
    "Massoterapia",
    "Terapias Integrativas",
    "Terapias holísticas",
    "Terapias quânticas",
    "Terapias Frequenciais",
    "Ozonioterapia"
  ]

  return (
    <section id="sobre" className="sobre-section">
      <div className="tratamentos-banner">
        <h2>Sobre mim</h2>
      </div>
      
      <div className="container sobre-content">
        <div className="sobre-image-wrapper">
          <div className="tratamentos-image-bg"></div>
          <img src="/image/Sul.jpeg" alt="Sil Oliveira" className="tratamentos-image" />
        </div>
        
        <div className="sobre-text-wrapper">
          <h3 className="sobre-title">Prazer, eu sou Sil Oliveira.</h3>
          <p className="sobre-text">
            Profissional da área de Estética e Terapias Integrativas, apaixonada por compreender o ser humano de forma integral.
          </p>
          <p className="sobre-text">
            Minha trajetória une estética, cuidado corporal e práticas integrativas, buscando oferecer uma experiência que vá além do procedimento: um momento de pausa, autocuidado, conexão e bem-estar.
          </p>

          <h4 className="sobre-subtitle">Minha forma de cuidar</h4>
          <p className="sobre-text">
            Acredito que cuidar do corpo é também olhar para a pessoa que existe dentro dele.
            Por isso, meu trabalho integra diferentes técnicas estéticas, corporais e terapêuticas, respeitando a individualidade e o momento de cada pessoa.
          </p>
          <p className="sobre-text">
            Meu propósito é criar um espaço onde você possa desacelerar, cuidar de si e se sentir acolhido(a).
          </p>

          <h4 className="sobre-subtitle">Formação & atuação</h4>
          <ul className="sobre-list">
            {formacao.map((item, index) => (
              <li key={index}>
                <span className="bullet-point"></span>
                {item}
              </li>
            ))}
          </ul>

          <h4 className="sobre-subtitle">Meu propósito</h4>
          <p className="sobre-text">
            Meu trabalho é sobre cuidar de pessoas, não apenas de corpos.
            Cada pessoa chega com uma história, uma rotina, necessidades e objetivos diferentes. Por isso, acredito em um atendimento individualizado, que une conhecimento, técnica, acolhimento e presença.
          </p>
          
          <div className="quote-box">
            <p className="quote-text">“Seu corpo merece cuidado. Você também.”</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
