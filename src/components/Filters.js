import React, { Component } from 'react';
import InputRange from 'react-input-range';
import "../css/Filters.scss"
import "../css/input-range/input-range.scss"
import Categories from "./Categories";

class Filters extends Component {


    render() {

        return (
            <div className="filters">
                <div className="filters__price">
                    <InputRange value={this.props.priceFilter.value}
                                onChange={(value) => {this.props.priceFilterChange(value)}}
                                maxValue={10000}
                                minValue={100}
                    />
                </div>
                <Categories/>
            </div>
        );
    }
}


export default Filters