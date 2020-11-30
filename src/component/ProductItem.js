import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Datacontext } from './DataProvuder'
import Color from './Color'
import Size from './Size'
import DetailThumb from './DetailThumb'
import {Link} from 'react-router-dom'

export default function ProductItem() {



    const { id } = useParams();
    const value=useContext(Datacontext)
    const [products] = value.products;
    const addCart = value.addCart

    const [index ,setIndex] = useState(0)
    const details = products.filter((product, index) => {
        return product._id === id
    })
   
    return (

        <>

            {
                details.map(product => (
                    <div className="details" key={product._id}>
                        <div className="img-container" 
                        ><img src={product.img[index] } alt=""/></div>
                            <div className="box-details">
                                <h2 title={product.name}>{product.name}</h2>
                                <h3>${product.price}</h3>
                                
                                <Color colour={product.colour}/>
                                <Size size={product.size} />
                               
                                <p>{product.description}</p>
                                <p>{product.content}</p>
                                <DetailThumb img={product.img} setIndex={setIndex}/>
                                
                                <Link to="/cart" className="cart" onClick={()=> addCart(product._id)}>add to card</Link>
                            

                        </div>

                    </div>
                ))
            }
        </>
    )

}


