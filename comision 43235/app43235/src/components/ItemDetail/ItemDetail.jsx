import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,nombre, img, category, precio, stock})=>{
    return(
        <article className='CardItem'>
    <header className='header'>
        <h2 className='ItemHeader'>
            {nombre}
        </h2>
    </header>
    <picture>
        <img src={img}  alt={nombre} className="ItemImg" />
    </picture>
    <section>
        <p className="Info">${precio}</p>
        <p className='info'>stock:{stock}</p>
        <p className='info'>{category}</p>
    
    </section>
    <footer className='ItemFooter'>
        <ItemCount initial={0} stock={stock} onAdd={(quantity)=>console.log('cantidad agregada',quantity)}/>
        <button>ver menos</button>
    </footer>
    </article>
    )
}

export default ItemDetail