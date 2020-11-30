import React, { useContext,useState ,useEffect} from 'react'

import { Datacontext } from './DataProvuder'
import Color from './Color'
import Size from './Size'

import {Link} from 'react-router-dom'

export default function Cart() {



   
    const value=useContext(Datacontext)
    
    const [cart ,setCart] = value.cart;
    

    const [total ,setTotal] = useState(0)

     useEffect(()=>{
         const getTotal =() =>{
             const res = cart.reduce((prev , iteam) =>{
                 return prev + (iteam.price * iteam.count)
             },0)
             setTotal(res)
         }
         getTotal()
     },[cart])
const reduction = id =>{
    cart.forEach(iteam => {
        if(iteam._id === id){
            iteam.count === 1 ? iteam.count=1 : iteam.count -=1;
        }
        
    })
    setCart([...cart])
}
const increase = id =>{
    cart.forEach(iteam => {
        if(iteam._id === id){
            iteam.count +=1;
        }
        
    })
    setCart([...cart])
}
const removeProducts = id =>{
    if (window.confirm("Do you want to remove")){
       cart.forEach((iteam,index)=>{
           if(iteam._id === id){
               cart.splice(index,1)
           }
       }) 
       setCart([...cart])
    }
}
const handleRequst=(e)=>{
   
      alert("you paid sucessifully");
   
}


  if(cart.length === 0)
     return <h2 style={{textAlign:"center",fontSize:"5rem"}}>Cart Empty</h2>
    
    return (

        <>

            {
                cart.map(product => (
                    <div className="details cart" key={product._id}>
                        <div className="img-container" 
                        ><img src={product.img[0]} alt=""/></div>
                            <div className="box-details">
                                <h2 title={product.name}>{product.name}</h2>
                                <h3>${product.price}</h3>
                                
                                <Color colour={product.colour}/>
                                <Size size={product.size} />
                               
                                <p>{product.description}</p>
                                <p className="cont">{product.content}</p>
                                
                            <div className="amount">
                                <button className="count" onClick={()=> reduction(product._id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={()=> increase(product._id)}> + </button>
                            </div>
                            <button className="delete" onClick={()=> removeProducts(product._id)}>X</button>

                        </div>

                    </div>
                ))
            }
    <div className="total">
        <Link to="/payment" onClick={handleRequst}>Payment</Link>
        <h3>Total: ${total}</h3>
    </div>

        </>
    )

}

