
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail =({id, name, img, category, price, stock, description}) => {
    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }
         console.log('se agrego correctamente: ' , objProduct)
    }
    return (
        <article>
            
                <h2>{name}</h2>
        
            
                <img src={img} style={{width: 100}}/>
                <p>categoria: {category} </p>
                
                    <p >Precio: ${price}</p>

                    <p>stok disponible :{stock}</p>
                    <p>descripcion: {description}</p>
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                
                
            
        </article>
    )
}
export default ItemDetail