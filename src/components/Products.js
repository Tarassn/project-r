import React, { Component } from 'react';
import Product from "./Product";
import "../css/Products.scss"
import {toArray} from "../utils";
import {toDict} from "../utils";


class Products extends Component {


    render() {
        let sortedByPrice = toArray({...this.props.products}, 'price', this.props.sortFilter.value);
        return (
            <div className={"products"}>
                {sortedByPrice.map((item) => (
                    <Product
                    key={item['id']}
                    id={item['id']}
                    product={item}
                    priceFilter={this.props.priceFilter}
                    categoriesFilter={this.props.categoriesFilter}
                    order={this.props.order}
                    addToOrder={this.props.addToOrder}
                    />
                ))}
            </div>
        );
    }
}


export default Products