import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.productslist.map((product) => (
          <Product
            key={product.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
