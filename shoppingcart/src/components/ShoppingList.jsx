import React,{Component} from 'react';
import data from '../../data/data.js';
import Product from './Product.jsx';
export default class ShoppingList extends Component
{ 
    constructor(props)
    {
        super(props);
    }
    render()
{    
        return(
    <div className='shoppingList'>
      <ul>
        {data.map((product)=>{return <Product product={product} key={product.productId} updateCart={(product)=>{this.props.cartUpdate(product);}}/>;})} 
          </ul>
    </div>
    );
    }
}