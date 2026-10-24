import './Styles/Expresiones.css'

const phrasalVerbs = [
    { expr: 'GET UP', sign: 'levantarse' },
    { expr: 'GET ON', sign: 'subirse; continuar; llevarse bien' },
    { expr: 'GET OFF', sign: 'bajarse; terminar el trabajo' },
    { expr: 'GET IN', sign: 'entrar; llegar' },
    { expr: 'GET OUT', sign: 'salir; salir de' },
    { expr: 'GET OVER', sign: 'superar; recuperarse' },
    { expr: 'GET ALONG', sign: 'llevarse bien; avanzar' },
    { expr: 'GET BACK', sign: 'volver; recuperar' },
    { expr: 'GET AWAY', sign: 'escaparse; irse' },
    { expr: 'GET BY', sign: 'arreglárselas' },
    { expr: 'GET THROUGH', sign: 'terminar; superar; comunicarse' },
    { expr: 'GET ACROSS', sign: 'transmitir; hacerse entender' },
    { expr: 'GET AROUND', sign: 'desplazarse; evitar' },
    { expr: 'GET AHEAD', sign: 'progresar; adelantarse' },
    { expr: 'GET DOWN', sign: 'bajar; desanimar' },
    { expr: 'GET INTO', sign: 'interesarse por; meterse en' },
    { expr: 'GET TOGETHER', sign: 'reunirse' },
]

const tresPalabras = [
    { expr: 'GET DOWN TO', sign: 'ponerse a' },
    { expr: 'GET OUT OF', sign: 'evitar; salir de' },
    { expr: 'GET AWAY WITH', sign: 'salirse con la suya' },
]

const idioms = [
    { expr: 'GET RID OF', sign: 'deshacerse de' },
    { expr: 'GET IN TOUCH', sign: 'ponerse en contacto' },
    { expr: 'GET USED TO', sign: 'acostumbrarse a' },
    { expr: 'GET HOLD OF', sign: 'localizar; conseguir' },
]

const renderExpr = (expr) => {
    const [first, ...rest] = expr.split(' ')
    return (
        <>
            <span className="pv-highlight">{first}</span>
            {rest.length > 0 && ` ${rest.join(' ')}`}
        </>
    )
}

const Tabla = ({ data, tipo, color }) => (
    <table className="expresiones__table" style={{ '--section-color': color }}>
        <thead>
            <tr>
                <th>Expresión</th>
                <th>Significado</th>
                {/* <th>Tipo</th> */}
            </tr>
        </thead>
        <tbody>
            {data.map((item, i) => (
                <tr key={i}>
                    <td>{renderExpr(item.expr)}</td>
                    <td>{item.sign}</td>
                    {/* <td className="expresiones__tipo">{tipo}</td> */}
                </tr>
            ))}
        </tbody>
    </table>
)

export const Expresiones = () => {
    return (
        <section className="expresiones">
            <div className="expresiones__grid"></div>
            <div className="expresiones__orb expresiones__orb--1"></div>
            <div className="expresiones__orb expresiones__orb--2"></div>

            <div className="expresiones__content">
                <h1 className="expresiones__title">Phrasal Verbs y Expresiones Idiomáticas</h1>

                <div className="expresiones__grid2">
                    <div className="expresiones__col">
                        <h2 className="expresiones__h2 expresiones__h2--teal">
                            1. Phrasal Verbs (Verbo + Preposición / Adverbio)
                        </h2>
                        <Tabla data={phrasalVerbs} tipo="Phrasal Verb" color="#2dd4bf" />
                    </div>

                    <div className="expresiones__col">
                        <h2 className="expresiones__h2 expresiones__h2--lime">
                            2. Phrasal Verbs de Tres Palabras (Verbo + Adverbio + Preposición)
                        </h2>
                        <Tabla data={tresPalabras} tipo="Phrasal Verb de 3 palabras" color="#a3e635" />

                        <h2 className="expresiones__h2 expresiones__h2--sky">
                            3. Expresiones Idiomáticas
                        </h2>
                        <Tabla data={idioms} tipo="Expresión idiomática" color="#38bdf8" />

                        <div className="expresiones__general">
                            <h2 className="expresiones__h2 expresiones__h2--amber">4. Uso General</h2>
                            <p>
                                <span className="pv-highlight">GET</span> (solo): obtener; conseguir;
                                recibir; llegar; ponerse o volverse, según el contexto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
