import React, { Component } from 'react';
import "../css/SortProducts.scss"


class SortProducts extends Component {

    render() {
        return (
            <div className={"sort-products"}>
                <label>
                    Сортировать:
                    <select value={this.props.sortFilter.value} onChange={event => this.props.handleSortChange(event)}>
                        <option value="recommended">Рекомендуемые</option>
                        <option value="lowToHigh">От дешевых к дорогим</option>
                        <option value="highToLow">От дорогих к дешевым</option>
                    </select>
                </label>
            </div>
        );
    }
}


export default SortProducts