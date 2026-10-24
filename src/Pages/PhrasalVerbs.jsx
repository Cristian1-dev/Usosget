import './Styles/PhrasalVerbs.css'

const phrasals = [
    { expr: 'Put on', sign: 'ponerse (ropa)' },
    { expr: 'GET UP', sign: 'levantarse' },
    { expr: 'GET ON', sign: 'subirse; continuar' },
    { expr: 'GET OFF', sign: 'bajarse; terminar' },
    { expr: 'GET IN', sign: 'entrar; llegar' },
    { expr: 'GET OUT', sign: 'salir; salir de' },
    { expr: 'GET OVER', sign: 'superar; recuperarse' },
    { expr: 'GET ALONG', sign: 'llevarse bien; avanzar' },
    { expr: 'GET BACK', sign: 'volver; recuperar' },
    { expr: 'GET AWAY', sign: 'escaparse; irse' },
    { expr: 'GET BY', sign: 'arreglárselas' },
    { expr: 'GET THROUGH', sign: 'terminar; superar' },
    { expr: 'GET ACROSS', sign: 'transmitir; hacerse entender' },
    { expr: 'GET AROUND', sign: 'desplazarse; evitar' },
    { expr: 'GET AHEAD', sign: 'progresar; adelantarse' },
    { expr: 'GET DOWN', sign: 'bajar; desanimar' },
    { expr: 'GET INTO', sign: 'interesarse por; meterse en' },
    { expr: 'GET TOGETHER', sign: 'reunirse' },
]

const renderExpr = (expr) => {
    if (!expr.startsWith('GET')) return expr
    const [first, ...rest] = expr.split(' ')
    return (
        <>
            <span className="pv-highlight">{first}</span>
            {rest.length > 0 && ` ${rest.join(' ')}`}
        </>
    )
}

export const PhrasalVerbs = () => {
    return (
        <section className="phrasal-verbs">
            <div className="phrasal-verbs__grid"></div>
            <div className="phrasal-verbs__orb phrasal-verbs__orb--1"></div>
            <div className="phrasal-verbs__orb phrasal-verbs__orb--2"></div>

            <div className="phrasal-verbs__content">
                <h1 className="phrasal-verbs__title">Phrasal Verbs</h1>

                <div className="phrasal-verbs__cards perro">
                    {phrasals.map((item, i) => (
                        <article
                            key={i}
                            className="phrasal-verbs__card perro"
                            style={{ animationDelay: `${0.35 + i * 0.06}s` }}
                        >
                            <p className="phrasal-verbs__expr">Phrasal verb</p>
                            <p className="phrasal-verbs__expr">-</p>
                            <p className="phrasal-verbs__expr">{renderExpr(item.expr)}</p>
                            <p className="phrasal-verbs__sign">{item.sign}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
