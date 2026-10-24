import { useState } from 'react'
import './Styles/GetObjeto.css'

const ejemplos = [
    {
        ingles: [
            { text: 'Did', highlight: false },
            { text: 'you', highlight: false },
            { text: 'get', highlight: true },
            { text: 'my', highlight: false },
            { text: 'email?', highlight: false },
        ],
        espanol: '¿Recibiste mi correo electrónico?'
    },
    {
        ingles: [
            { text: 'I', highlight: false },
            { text: 'got', highlight: true },
            { text: 'a', highlight: false },
            { text: 'new', highlight: false },
            { text: 'job', highlight: false },
            { text: 'last', highlight: false },
            { text: 'week.', highlight: false },
        ],
        espanol: 'Conseguí un trabajo nuevo la semana pasada.'
    },
    {
        ingles: [
            { text: 'Can', highlight: false },
            { text: 'I', highlight: false },
            { text: 'get', highlight: true },
            { text: 'a', highlight: false },
            { text: 'cup', highlight: false },
            { text: 'of', highlight: false },
            { text: 'coffee,', highlight: false },
            { text: 'please?', highlight: false },
        ],
        espanol: '¿Me das una taza de café, por favor?'
    },
    {
        ingles: [
            { text: 'She', highlight: false },
            { text: 'got', highlight: true },
            { text: 'a', highlight: false },
            { text: 'great', highlight: false },
            { text: 'present', highlight: false },
            { text: 'for', highlight: false },
            { text: 'her', highlight: false },
            { text: 'birthday.', highlight: false },
        ],
        espanol: 'Ella recibió un regalo genial por su cumpleaños.'
    },
    {
        ingles: [
            { text: 'We', highlight: false },
            { text: 'need', highlight: false },
            { text: 'to', highlight: false },
            { text: 'get', highlight: true },
            { text: 'some', highlight: false },
            { text: 'groceries', highlight: false },
            { text: 'for', highlight: false },
            { text: 'dinner.', highlight: false },
        ],
        espanol: 'Tenemos que comprar/conseguir algo de víveres para la cena.'
    },
]

export const GetObjeto = () => {
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
        <section className="get-objeto">
            <div className="get-objeto__grid"></div>
            <div className="get-objeto__orb get-objeto__orb--1"></div>
            <div className="get-objeto__orb get-objeto__orb--2"></div>

            <div className="get-objeto__content">
                <h1 className="get-objeto__title">
                    <span className="pv-highlight">Get</span> + Objeto / Sustantivo
                </h1>
                <h2 className="get-objeto__subtitle">Obtener, conseguir, comprar o recibir algo.</h2>

                <div className="get-objeto__examples-header">
                    <p className="get-objeto__examples-title">Ejemplos</p>
                    <button
                        className={`get-objeto__btn ${allShown ? 'get-objeto__btn--hide' : ''}`}
                        onClick={handleClick}
                    >
                        {allShown ? 'Reiniciar' : `Mostrar oración ${count + 1}`}
                    </button>
                </div>

                <div className={`get-objeto__list ${count > 0 ? 'get-objeto__list--show' : ''}`}>
                    {ejemplos.slice(0, count).map((ejemplo, i) => (
                        <div key={i} className="get-objeto__card">
                            <span className="get-objeto__number">{i + 1}</span>
                            <div className="get-objeto__sentences">
                                <p className="get-objeto__english">
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
                                <span className="get-objeto__arrow">→</span>
                                <div className="get-objeto__translation">
                                    <p className="get-objeto__spanish">{ejemplo.espanol}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
