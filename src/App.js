
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import {DataProvider} from './component/DataProvuder';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Contact from './component/Contact';
import Product from './component/Product'
import ProductItems from './component/ProductItem'
import Cart from './component/Cart'
import Footer from '../src/component/Footer'

 class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="bac"> 
          <Router>
          <Navbar/ >
          <Routes>
        
        <Route exact path="/" element={ <Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <div className="app">
     <Routes>
               
               <Route exact  path="/product" element={<Product/>} />
              <Route  path="/product/:id" element={<ProductItems/>}/>
              <Route  path="cart" element={<Cart/>}/>
              </Routes>
        
      </div>
      
      
      </Router> 
      <Footer/>
      </div>
      
      </DataProvider>
    )
  }
}

export default App
