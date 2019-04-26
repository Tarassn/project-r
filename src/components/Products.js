import React, { Component } from 'react';
import Product from "./Product";
import "../css/Products.scss"
import {toArray} from "../utils";


class Products extends Component {

    ifShowEmptyMessage = (arr, min, max) => {
        let showEmptyMessage = [];
        arr.map((item) => {
                if (min < item.price && item.price < max) {
                    showEmptyMessage.push(1);
                    return true
                }
            }
        );
        return !(showEmptyMessage.length > 0);
    };
    categoriesFilterEmpty = () => {
        let res = true;
        Object.keys(this.props.categoriesFilter).map(key => {
           if (this.props.categoriesFilter[key]) {
               res = false
           }
        });
        return res;
    };

    render() {
        let sortedByPrice = toArray({...this.props.products}, 'price', this.props.sortFilter.value);
        let {min, max} = this.props.priceFilter.value;
        let displayEmptyMessage = this.ifShowEmptyMessage(sortedByPrice,min,max)||this.categoriesFilterEmpty()? "block": "none";

        return (
            <div className={"products"}>
                <div style={{display:displayEmptyMessage}}> Нет подходящих товаров</div>
                {sortedByPrice.map((item) => (
                    <Product
                    key={item['id']}
                    id={item['id']}
                    product={item}
                    isPriceFit =  {min < item.price && item.price < max}
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