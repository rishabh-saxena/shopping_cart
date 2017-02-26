import React from 'react';
export default class Product extends React.Component{
    addProduct(product)
    {
        this.props.updateCart(product);
    }
    render()
  {
        return(
      <li>
      <div className='product'> 
      <div className='image'><img src={this.props.product.url}/> </div>
      <div className='details'><h3><b>{this.props.product.title}</b></h3> 
      <p>Price:{this.props.product.price}</p>
      </div>
      <button className='addToCart' onClick={this.addProduct.bind(this,this.props.product)}>AddToCart</button>
      </div>
      </li>
    );
    }
}