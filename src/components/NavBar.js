import CartWidget from "./CartWidget";
import pizza from '../assets/pizza.png';

const NavBar = () => {
    return (
        <nav className="header">

            <div className="brand">
                <a href="index.html">
                    <img className='steve' src={pizza} alt="pizza"></img>
                </a>
                <p className="pizzarrap">CLOUDSPORT JUJUY</p>
            </div>

            <div >
                <ul className="nav-item">
                    <li className="item" >
                        <a href="index.html">DEPORTIVO</a>
                    </li>
                    <li className="item">
                        <a href="index.html">LO NUEVO-2022</a>
                    </li>
                    <li className="item">
                        <a href="index.html">URBANO</a>
                    </li>
                </ul>
            </div>

            <div className="carrito">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;