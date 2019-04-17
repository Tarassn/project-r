import React, { Component } from 'react';
import Slider from "../components/Slider";
import Filters from "../components/Filters";
import Products from "../components/Products";



class Main extends Component {

    render() {
        return (
            <div className="Main">
                    <Slider/>
                    <Filters
                        priceFilter={this.props.priceFilter}
                        sortFilter={this.props.sortFilter}
                        categoriesFilter={this.props.categoriesFilter}
                        priceFilterChange={this.props.priceFilterChange}
                        handleSortChange={this.props.handleSortChange}
                        handleCategoriesChange={this.props.handleCategoriesChange}/>
                    <Products
                        priceFilter={this.props.priceFilter}
                        sortFilter={this.props.sortFilter}
                        categoriesFilter={this.props.categoriesFilter}
                        products={this.props.products}
                        order={this.props.order}
                        addToOrder={this.props.addToOrder}
                    />
            </div>
        );
    }
}


export default Main