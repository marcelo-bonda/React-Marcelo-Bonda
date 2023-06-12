



const Item = ({id, nombre, img, precio}) => {
    return(
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    ${precio}
                </p>
            </section>
            <footer>
                <button>Ver detalle </button>
            </footer>
        </article>
    )
}

export default Item