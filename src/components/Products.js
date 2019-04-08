import React, { Component } from 'react';
import Product from "./Product";
import "../css/Products.scss"


class Products extends Component {


    render() {
        return (
            <div className={"products"}>
                {Object.keys(this.props.products).map((key) => (
                    <Product
                    key={key}
                    id={key}
                    product={this.props.products[key]}
                    priceFilter={this.props.priceFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    addToOrder={this.props.addToOrder}/>
                ))}
            </div>
        );
    }
}


export default Products