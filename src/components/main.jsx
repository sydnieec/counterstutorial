import React, { Component } from "react";
import Products from "/Users/sydniechau/Downloads/counters/counters/src/components/products.jsx";

class Main extends Component {
  state = {
    productslist: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (product) => {
    const productslist = [...this.state.productslist];
    const index = productslist.indexOf(product);
    productslist[index] = { ...product };
    productslist[index].value++;
    this.setState({ productslist });
  };

  handleReset = () => {
    const productslist = this.state.productslist.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ productslist });
  };
  handleDelete = (productId) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist.filter(
      (c) => c.id !== productId
    );
    this.setState({ productslist });
  };
  render() {
    return (
      <React.Fragment>
        <Products
          productslist={this.state.productslist}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default Main;
