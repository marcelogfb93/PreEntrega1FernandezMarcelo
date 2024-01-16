import {  Text, } from "@chakra-ui/react"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
           <Text 
           bgGradient='linear(to-l, #7928CA, #FF0080)'
           bgClip='text'
           fontSize='6xl'
           fontWeight='extrabold'> <h3>Listo Tu Mate</h3> </Text>
            <section>
                <Link to={'/category/endulzantes'} >endulzantes</Link>
                <Link to={'/category/mates'}> mates</Link>
                <Link to={'/category/yerbas'}> yerbas</Link>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar