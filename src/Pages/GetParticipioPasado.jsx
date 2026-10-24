import { useState } from 'react'
import './Styles/GetParticipioPasado.css'

const ejemplos = [
    {
        ingles: [
            { text: 'They', highlight: false },
            { text: 'got', highlight: true },
            { text: 'married', highlight: false },
            { text: 'in', highlight: false },
            { text: 'Italy', highlight: false },
            { text: 'last', highlight: false },
            { text: 'summer.', highlight: false },
        ],
        espanol: 'Ellos se casaron en Italia el verano pasado.'
    },
    {
        ingles: [
            { text: 'He', highlight: false },
            { text: 'got', highlight: true },
            { text: 'fired', highlight: false },
            { text: 'because', highlight: false },
            { text: 'he', highlight: false },
            { text: 'was', highlight: false },
            { text: 'always', highlight: false },
            { text: 'late.', highlight: false },
        ],
        espanol: 'El fue despedido porque siempre llegaba tarde.'
    },
    {
        ingles: [
            { text: 'Be', highlight: false },
            { text: 'careful,', highlight: false },
            { text: 'you', highlight: false },
            { text: 'might', highlight: false },
            { text: 'get', highlight: true },
            { text: 'hurt.', highlight: false },
        ],
        espanol: 'Ten cuidado, podrías lastimarte.'
    },
    {
        ingles: [
            { text: 'My', highlight: false },
            { text: 'phone', highlight: false },
            { text: 'got', highlight: true },
            { text: 'stolen', highlight: false },
            { text: 'at', highlight: false },
            { text: 'the', highlight: false },
            { text: 'concert.', highlight: false },
        ],
        espanol: 'Me robaron el teléfono en el concierto.'
    },
    {
        ingles: [
            { text: 'She', highlight: false },
            { text: 'got', highlight: true },
            { text: 'lost', highlight: false },
            { text: 'in', highlight: false },
            { text: 'the', highlight: false },
            { text: 'city', highlight: false },
            { text: 'center.', highlight: false },
        ],
        espanol: 'Ella se perdió en el centro de la ciudad.'
    },
]

export const GetParticipioPasado = () => {
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
        <section className="get-participio">
            <div className="get-participio__grid"></div>
            <div className="get-participio__orb get-participio__orb--1"></div>
            <div className="get-participio__orb get-participio__orb--2"></div>

            <div className="get-participio__content">
                <h1 className="get-participio__title">
                    <span className="pv-highlight">Get</span> + Participio Pasado
                </h1>
                <h2 className="get-participio__subtitle">Voz Pasiva / Recibir una acción</h2>

                <div className="get-participio__examples-header">
                    <p className="get-participio__examples-title">Ejemplos</p>
                    <button
                        className={`get-participio__btn ${allShown ? 'get-participio__btn--hide' : ''}`}
                        onClick={handleClick}
                    >
                        {allShown ? 'Reiniciar' : `Mostrar oración ${count + 1}`}
                    </button>
                </div>

                <div className={`get-participio__list ${count > 0 ? 'get-participio__list--show' : ''}`}>
                    {ejemplos.slice(0, count).map((ejemplo, i) => (
                        <div key={i} className="get-participio__card">
                            <span className="get-participio__number">{i + 1}</span>
                            <div className="get-participio__sentences">
                                <p className="get-participio__english">
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
                                <span className="get-participio__arrow">→</span>
                                <div className="get-participio__translation">
                                    <p className="get-participio__spanish">{ejemplo.espanol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
