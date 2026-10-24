import { useState } from 'react'
import './Styles/Get.css'

const ejemplos = [
    {
        ingles: [
            { text: 'Ah,', highlight: false },
            { text: 'now', highlight: false },
            { text: 'I', highlight: false },
            { text: 'get', highlight: true },
            { text: 'it!', highlight: false },
            { text: 'Thanks', highlight: false },
            { text: 'for', highlight: false },
            { text: 'explaining.', highlight: false },
        ],
        espanol: '¡Ah, ahora lo entiendo! Gracias por explicar.'
    },
    {
        ingles: [
            { text: 'Did', highlight: false },
            { text: 'you', highlight: false },
            { text: 'get', highlight: true },
            { text: 'the', highlight: false },
            { text: 'joke?', highlight: false },
        ],
        espanol: '¿Entendiste el chiste?'
    },
    {
        ingles: [
            { text: 'I', highlight: false },
            { text: "don't", highlight: false },
            { text: 'get', highlight: true },
            { text: 'why', highlight: false },
            { text: 'she', highlight: false },
            { text: 'did', highlight: false },
            { text: 'that.', highlight: false },
        ],
        espanol: 'No entiendo por qué ella hizo eso.'
    },
    {
        ingles: [
            { text: 'Do', highlight: false },
            { text: 'you', highlight: false },
            { text: 'get', highlight: true },
            { text: 'what', highlight: false },
            { text: 'I', highlight: false },
            { text: 'mean?', highlight: false },
        ],
        espanol: '¿Entiendes lo que quiero decir?'
    },
    {
        ingles: [
            { text: 'Sorry,', highlight: false },
            { text: "I", highlight: false },
            { text: "didn't", highlight: false },
            { text: 'get', highlight: true },
            { text: 'your', highlight: false },
            { text: 'name.', highlight: false },
        ],
        espanol: 'Lo siento, no capté / no escuché tu nombre.'
    },
]

export const Get = () => {
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
        <section className="get-main">
            <div className="get-main__grid"></div>
            <div className="get-main__orb get-main__orb--1"></div>
            <div className="get-main__orb get-main__orb--2"></div>

            <div className="get-main__content">
                <h1 className="get-main__title">
                    <span className="pv-highlight">GET</span>
                </h1>
                <h2 className="get-main__subtitle">Entender / Captar</h2>

                <div className="get-main__examples-header">
                    <p className="get-main__examples-title">Ejemplos</p>
                    <button
                        className={`get-main__btn ${allShown ? 'get-main__btn--hide' : ''}`}
                        onClick={handleClick}
                    >
                        {allShown ? 'Reiniciar' : `Mostrar oración ${count + 1}`}
                    </button>
                </div>

                <div className={`get-main__list ${count > 0 ? 'get-main__list--show' : ''}`}>
                    {ejemplos.slice(0, count).map((ejemplo, i) => (
                        <div key={i} className="get-main__card">
                            <span className="get-main__number">{i + 1}</span>
                            <div className="get-main__sentences">
                                <p className="get-main__english">
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
                                <span className="get-main__arrow">→</span>
                                <div className="get-main__translation">
                                    <p className="get-main__spanish">{ejemplo.espanol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
