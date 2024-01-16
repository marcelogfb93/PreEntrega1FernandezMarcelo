import { Link } from 'react-router-dom'


const Item = ({ id, name, img, price, stock, category }) => {
    
    return (
        <article>
            
                <h2>{name}</h2>
        
            
                <img src={img} style={{width: 100}}/>
                <p>categoria: {category}</p>
                    <p >Precio: ${price}</p>

                    <p>stok disponible :{stock}</p>
                    <Link to={`/detail/${id}`}>Ver Detalle</Link>
                
                
            
        </article>
    )
}
export default Item