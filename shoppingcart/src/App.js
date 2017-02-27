import React, { Component } from 'react';
import Product from './components/Product.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import Cart from './components/Cart.jsx';
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={products:[]};
    }
    updateCartList(product)
    {   
      //console.log('this.state.product',this.state.products);
        // this.state.products.push(product);
        // this.render();
        this.setState((oldState) => {products: oldState.products.push(product)});
       
    }
    render() {
      console.log('products array now',this.state.products);
        return (
      <div className="App">
        <div className="App-header">
          <h2>REACT SHOPPING CART</h2>
          <h3>Products</h3>
        </div>
        <div className="products">
          <ShoppingList cartUpdate={(product)=>{this.updateCartList(product);}}/>
          </div>
          <div className="cart">
            <h2>CART</h2>
             
            <Cart product={this.state.products}/>
          </div>
      </div>
    );
    }
}

export default App;
