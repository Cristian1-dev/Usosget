import './Styles/Resumen.css'

const filas = [
    {
        uso: [{ text: 'GET', highlight: true }, { text: '+ Objeto', highlight: false }],
        significado: 'Obtener / Comprar / Recibir',
        ingles: [
            { text: 'I', highlight: false },
            { text: 'got', highlight: true },
            { text: 'a', highlight: false },
            { text: 'new', highlight: false },
            { text: 'job.', highlight: false },
        ],
        espanol: 'Conseguí un trabajo nuevo.',
        color: '#00f5ff',
    },
    {
        uso: [{ text: 'GET', highlight: true }, { text: '+ Adjetivo', highlight: false }],
        significado: 'Ponerse / Volverse (Cambio)',
        ingles: [
            { text: "It's", highlight: false },
            { text: 'getting', highlight: true },
            { text: 'cold.', highlight: false },
        ],
        espanol: 'Se está poniendo frío.',
        color: '#8b5cf6',
    },
    {
        uso: [{ text: 'GET', highlight: true }, { text: '+ Lugar', highlight: false }],
        significado: 'Llegar',
        ingles: [
            { text: 'I', highlight: false },
            { text: 'got', highlight: true },
            { text: 'home', highlight: false },
            { text: 'late.', highlight: false },
        ],
        espanol: 'Llegué a casa tarde.',
        color: '#10b981',
    },
    {
        uso: [{ text: 'GET', highlight: true }, { text: '+ Participio', highlight: false }],
        significado: 'Hacer una acción',
        ingles: [
            { text: 'They', highlight: false },
            { text: 'got', highlight: true },
            { text: 'married.', highlight: false },
        ],
        espanol: 'Ellos se casaron.',
        color: '#f43f5e',
    },
    {
        uso: [{ text: 'GET', highlight: true }, { text: '(Solo)', highlight: false }],
        significado: 'Entender / Captar',
        ingles: [
            { text: 'I', highlight: false },
            { text: 'get', highlight: true },
            { text: 'it!', highlight: false },
        ],
        espanol: '¡Lo entiendo!',
        color: '#f59e0b',
    },
]

const renderWords = (palabras) =>
    palabras.map((palabra, i) => (
        <span key={i}>
            {palabra.highlight ? (
                <span className="pv-highlight">{palabra.text}</span>
            ) : (
                palabra.text
            )}
            {i < palabras.length - 1 && ' '}
        </span>
    ))

export const Resumen = () => {
    return (
        <section className="resumen">
            <div className="resumen__grid"></div>
            <div className="resumen__orb resumen__orb--1"></div>
            <div className="resumen__orb resumen__orb--2"></div>

            <div className="resumen__content">
                <h1 className="resumen__title">Resumen General</h1>

                <table className="resumen__table">
                    <thead>
                        <tr>
                            <th>Uso de GET</th>
                            <th>Significado</th>
                            <th>Ejemplo Corto</th>
                            <th>Traducción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filas.map((fila, i) => (
                            <tr key={i} className="resumen__row" style={{ '--row-color': fila.color }}>
                                <td className="resumen__uso">{renderWords(fila.uso)}</td>
                                <td className="resumen__significado">{fila.significado}</td>
                                <td className="resumen__english">{renderWords(fila.ingles)}</td>
                                <td className="resumen__spanish">{fila.espanol}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
