import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datacontext } from './DataProvuder'


export default function Product() {

const value = useContext(Datacontext)

    const [products] = value.products
    const addCart = value.addCart

    return (
        <div id="product">
            {
                products.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <img className="img" src={product.img[0]} alt="" />
                        </Link>
                        <h3>

                            <Link to={`/product/${product._id}`}  >{product.name}</Link>
                        </h3>
                        <span>${product.price}</span>
                        <p>{product.description}</p>
                        <button className="btn" onClick={()=> addCart(product._id)}>Add to card</button>


                    </div>
                ))
            }
        </div>
    )
}
