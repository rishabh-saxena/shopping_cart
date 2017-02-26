import React, { Component } from 'react';
export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
console.log('bhbhbhbhb',this.props.product);
        if (this.props.product.length > 0) {
            return (
        <div>
          <div className='image'><img src={this.props.product[0].url}/> </div>
          <div className='details'><h3><b>{this.props.product[0].title}</b></h3> </div>
          <p>Price:{this.props.product.price}</p>
        </div>
      );
        }
        else {
            return (
        <div> </div>
      );
        }
    }
  
}

