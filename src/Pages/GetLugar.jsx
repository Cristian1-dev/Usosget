import { useState } from 'react'
import './Styles/GetLugar.css'

const ejemplos = [
    {
        ingles: [
            { text: 'What', highlight: false },
            { text: 'time', highlight: false },
            { text: 'do', highlight: false },
            { text: 'you', highlight: false },
            { text: 'usually', highlight: false },
            { text: 'get', highlight: true },
            { text: 'home?', highlight: false },
        ],
        espanol: '¿A qué hora llegas a casa normalmente?'
    },
    {
        ingles: [
            { text: 'I', highlight: false },
            { text: 'got', highlight: true },
            { text: 'to', highlight: false },
            { text: 'the', highlight: false },
            { text: 'office', highlight: false },
            { text: 'at', highlight: false },
            { text: '8:00', highlight: false },
            { text: 'AM.', highlight: false },
        ],
        espanol: 'Llegué a la oficina a las 8:00 AM.'
    },
    {
        ingles: [
            { text: 'How', highlight: false },
            { text: 'do', highlight: false },
            { text: 'I', highlight: false },
            { text: 'get', highlight: true },
            { text: 'to', highlight: false },
            { text: 'the', highlight: false },
            { text: 'train', highlight: false },
            { text: 'station?', highlight: false },
        ],
        espanol: '¿Cómo llego a la estación de tren?'
    },
    {
        ingles: [
            { text: 'We', highlight: false },
            { text: 'got', highlight: true },
            { text: 'to', highlight: false },
            { text: 'the', highlight: false },
            { text: 'airport', highlight: false },
            { text: 'just', highlight: false },
            { text: 'in', highlight: false },
            { text: 'time.', highlight: false },
        ],
        espanol: 'Llegamos al aeropuerto justo a tiempo.'
    },
    {
        ingles: [
            { text: 'Call', highlight: false },
            { text: 'me', highlight: false },
            { text: 'when', highlight: false },
            { text: 'you', highlight: false },
            { text: 'get', highlight: true },
            { text: 'there.', highlight: false },
        ],
        espanol: 'Llámame cuando llegues allá.'
    },
]

export const GetLugar = () => {
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
        <section className="get-lugar">
            <div className="get-lugar__grid"></div>
            <div className="get-lugar__orb get-lugar__orb--1"></div>
            <div className="get-lugar__orb get-lugar__orb--2"></div>

            <div className="get-lugar__content">
                <h1 className="get-lugar__title">
                    <span className="pv-highlight">Get</span> + Lugar
                </h1>
                <h2 className="get-lugar__subtitle">Llegar a un destino.</h2>

                <div className="get-lugar__examples-header">
                    <p className="get-lugar__examples-title">Ejemplos</p>
                    <button
                        className={`get-lugar__btn ${allShown ? 'get-lugar__btn--hide' : ''}`}
                        onClick={handleClick}
                    >
                        {allShown ? 'Reiniciar' : `Mostrar oración ${count + 1}`}
                    </button>
                </div>

                <div className={`get-lugar__list ${count > 0 ? 'get-lugar__list--show' : ''}`}>
                    {ejemplos.slice(0, count).map((ejemplo, i) => (
                        <div key={i} className="get-lugar__card">
                            <span className="get-lugar__number">{i + 1}</span>
                            <div className="get-lugar__sentences">
                                <p className="get-lugar__english">
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
                                <span className="get-lugar__arrow">→</span>
                                <div className="get-lugar__translation">
                                    <p className="get-lugar__spanish">{ejemplo.espanol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
