import React, { Component } from 'react';
import "../css/SortProducts.scss"


class SortProducts extends Component {

    render() {
        return (
            <div className={"sort-products"}>
                <label>
                    Сортировать:
                    <select value={this.props.sortFilter.value} onChange={event => this.props.handleSortChange(event)}>
                        <option value="0">Рекомендуемые</option>
                        <option value="1">От дешевых к дорогим</option>
                        <option value="-1">От дорогих к дешевым</option>
                    </select>
                </label>
            </div>
        );
    }
}


export default SortProducts