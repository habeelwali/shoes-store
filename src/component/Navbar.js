import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/cart-plus-solid.svg';
import './css/Header.css'
import {Datacontext} from './DataProvuder'

function Navbar() {
    const value = useContext(Datacontext);
    const [cart]=value.cart

    return (
        <header >
            <div className="menu">
            <img src={Menu} alt="" width="20" />
            </div>
            <nav >
                <ul>
                
               <li> <Link to="/"> Home</Link></li>
               <li> <Link to="/contact"> Contact</Link></li>
               <li> <Link to="/Product"> Product</Link></li>
               <li className="close">
                   <img src={Close} alt ="" width="20"/>
               </li>
                </ul>
           
            <div className="nav-cart">
    <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={CartIcon} alt="" width="20" />
                </Link>
            </div>
            </nav>
        </header>
    );
}

export default Navbar
