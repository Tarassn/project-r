import React, { Component } from 'react';
import InputRange from 'react-input-range';
import "../css/Filters.scss"
import "../css/input-range/input-range.scss"
import Categories from "./Categories";
import SortProducts from "./SortProducts";

class Filters extends Component {


    render() {

        return (
            <div className="filters">
                <div className="filters__price">
                    <InputRange value={this.props.priceFilter.value}
                                onChange={(value) => {this.props.priceFilterChange(value)}}
                                maxValue={5000}
                                minValue={100}
                    />
                </div>
                <SortProducts handleSortChange={this.props.handleSortChange}
                              sortFilter={this.props.sortFilter}/>
                <Categories handleCategoriesChange={this.props.handleCategoriesChange}
                            categoriesFilter={this.props.categoriesFilter}/>
            </div>
        );
    }
}


export default Filters