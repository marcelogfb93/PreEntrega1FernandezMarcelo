import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ( {greeting} ) => {

const [loading, setLoading] = useState(true)

const [ products, setProducts] = useState([])

const {categoryId} = useParams()

useEffect(() => {
    if(categoryId) document.title = 'Tienda Online: ' +  categoryId
    
    return () => {
        document.title = 'Tienda Online'
    }
}, [categoryId])

useEffect (() => {

    setLoading(true)

    const asyncFuncion = categoryId ? getProductsByCategory : getProducts

    asyncFuncion(categoryId)
    .then(products =>{
        setProducts(products)
    })
    .catch(error => {
        console.log(error)
    })

    .finally(() => {
        setLoading(false)
    })
 
}, [categoryId])

if(loading){
    return <h1>Cargando Productos...</h1>
}

    return (
        <div>
        <h1>{greeting + (categoryId ?? '')}</h1>
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer