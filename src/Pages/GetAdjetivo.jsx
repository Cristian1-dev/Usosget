import { useState } from 'react'
import './Styles/GetAdjetivo.css'

const ejemplos = [
    {
        ingles: [
            { text: 'Put', highlight: false },
            { text: 'on', highlight: false },
            { text: 'a', highlight: false },
            { text: 'jacket,', highlight: false },
            { text: "it's", highlight: false },
            { text: 'getting', highlight: true },
            { text: 'cold.', highlight: false },
        ],
        espanol: 'Ponte una chaqueta, se está poniendo frío.'
    },
    {
        ingles: [
            { text: "Don't", highlight: false },
            { text: 'get', highlight: true },
            { text: 'angry,', highlight: false },
            { text: 'it', highlight: false },
            { text: 'was', highlight: false },
            { text: 'an', highlight: false },
            { text: 'accident.', highlight: false },
        ],
        espanol: 'No te enojes, fue un accidente.'
    },
    {
        ingles: [
            { text: "I'm", highlight: false },
            { text: 'getting', highlight: true },
            { text: 'tired,', highlight: false },
            { text: "let's", highlight: false },
            { text: 'take', highlight: false },
            { text: 'a', highlight: false },
            { text: 'break.', highlight: false },
        ],
        espanol: 'Me estoy cansando, tomemos un descanso.'
    },
    {
        ingles: [
            { text: 'He', highlight: false },
            { text: 'got', highlight: true },
            { text: 'sick', highlight: false },
            { text: 'after', highlight: false },
            { text: 'eating', highlight: false },
            { text: 'the', highlight: false },
            { text: 'seafood.', highlight: false },
        ],
        espanol: 'Él se enfermó después de comer los mariscos.'
    },
    {
        ingles: [
            { text: 'If', highlight: false },
            { text: "you", highlight: false },
            { text: "don't", highlight: false },
            { text: 'eat,', highlight: false },
            { text: "you'll", highlight: false },
            { text: 'get', highlight: true },
            { text: 'hungry', highlight: false },
            { text: 'soon.', highlight: false },
        ],
        espanol: 'Si no comes, te dará hambre pronto.'
    },
]

export const GetAdjetivo = () => {
    const [count, setCount] = useState(0)
    const total = ejemplos.length
    const allShown = count >= total

    const handleClick = () => {
        if (allShown) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }

    return (
        <section className="get-adjetivo">
            <div className="get-adjetivo__grid"></div>
            <div className="get-adjetivo__orb get-adjetivo__orb--1"></div>
            <div className="get-adjetivo__orb get-adjetivo__orb--2"></div>

            <div className="get-adjetivo__content">
                <h1 className="get-adjetivo__title">
                    <span className="pv-highlight">Get</span> + Adjetivo
                </h1>
                <h2 className="get-adjetivo__subtitle">Ponerse / Volverse o enfermarse (expresa un cambio de estado).</h2>

                <div className="get-adjetivo__examples-header">
                    <p className="get-adjetivo__examples-title">Ejemplos</p>
                    <button
                        className={`get-adjetivo__btn ${allShown ? 'get-adjetivo__btn--hide' : ''}`}
                        onClick={handleClick}
                    >
                        {allShown ? 'Reiniciar' : `Mostrar oración ${count + 1}`}
                    </button>
                </div>

                <div className={`get-adjetivo__list ${count > 0 ? 'get-adjetivo__list--show' : ''}`}>
                    {ejemplos.slice(0, count).map((ejemplo, i) => (
                        <div key={i} className="get-adjetivo__card">
                            <span className="get-adjetivo__number">{i + 1}</span>
                            <div className="get-adjetivo__sentences">
                                <p className="get-adjetivo__english">
                                    {ejemplo.ingles.map((palabra, j) => (
                                        <span key={j}>
                                            {palabra.highlight ? (
                                                <span className="pv-highlight">{palabra.text}</span>
                                            ) : (
                                                palabra.text
                                            )}
                                            {j < ejemplo.ingles.length - 1 && ' '}
                                        </span>
                                    ))}
                                </p>
                                <span className="get-adjetivo__arrow">→</span>
                                <div className="get-adjetivo__translation">
                                    <p className="get-adjetivo__spanish">{ejemplo.espanol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
