import { useState, useEffect } from "react"
import { getProductById } from '../../asyncMock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        if(product) document.title = product.name 
        
        return () => {
            document.title = 'Tienda Online'
        }
    },[product])

    useEffect(() => {

        setLoading(true)

        getProductById(productId)
        .then(product =>{
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    
        .finally(() => {
            setLoading(false)
        })

    }, [productId])

    if(loading){
        return <h1>Cargando el Producto...</h1>
    }

    return (
        <div>

            <h1> Detalle del producto </h1>
            <ItemDetail {...product}/>

                   </div>
    )

}

export default ItemDetailContainer