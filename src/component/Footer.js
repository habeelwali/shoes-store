import React from 'react';
import Logo from './logo.png';


 const Footer = () => {
    return (
        <div className="container" >
            
            <footer className="txt">
                &copy; 2020 Created by :  
            
                <a   target="blank" href="https://github.com/habeelwali"> 
                    Habeel Wali <img  alt="" src={Logo}/>
                </a>
            </footer>
        </div>
    )
}
export default Footer