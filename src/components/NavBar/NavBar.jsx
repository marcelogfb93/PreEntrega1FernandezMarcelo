import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav>
            <h3>Listo Tu Mate</h3>
            <div>
                <button>Termos</button>
                <button>Mates</button>
                <button>Yerbas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar