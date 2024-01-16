import { useState } from 'react'
import { Button } from "@chakra-ui/react"

const ItemCount = ({stock, initial =1, onAdd})=>{
const  [count, setCount] = useState(initial)

const increment = () =>{
    if(count< stock){
        setCount(prev => prev + 1)
    }
}
const decrement = () => {
    if (count > 1) {
        setCount(prev => prev - 1)
    }
}
return(
    <div>
        <h2>{count}</h2>
        <Button colorScheme='blackAlpha' onClick={decrement}>-</Button> 
        
        <Button colorScheme='blackAlpha'  onClick={increment}>+</Button>
        
         <Button colorScheme='blue' onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                    </Button>
            </div>
            
)
}
export default ItemCount