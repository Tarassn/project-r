import React, { Component } from 'react';
import "../css/Categories.scss"

class Categories extends Component {
    state={
        isOpen:false,

    };
    toggleIsOpen = (event) => {
        let isOpen = !this.state.isOpen;
        this.setState({
            isOpen,
        });
    };

    render() {
        let {active, water, sport, excursion,} = this.props.categoriesFilter;
        let openMenu = this.state.isOpen ? "block" : "none";
        let checked = this.state.isOpen ? true : "";
        let handleInput= this.props.handleCategoriesChange;
        return (
            <div className="categories">
                <input
                    className="categories-checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={null}
                /><label onClick={this.toggleIsOpen} className="categories__category">Категории</label>
                <ul className="categories__submenu" style={{display:openMenu}}>
                    <li><input type="checkbox" defaultChecked={active}/><label className="categories__types">
                        <span data-name='active' onClick={handleInput}></span>Активные</label>
                    </li>
                    <li><input type="checkbox"  defaultChecked={water}/><label className="categories__types">
                        <span data-name={'water'} onClick={handleInput}></span>Водные</label>
                    </li>
                    <li><input type="checkbox"  defaultChecked={sport}/><label className="categories__types">
                        <span data-name={'sport'} onClick={handleInput}></span>Спорт</label>
                    </li>
                    <li><input type="checkbox"  defaultChecked={excursion}/><label className="categories__types">
                        <span data-name={'excursion'} onClick={handleInput}></span>Экскурсии</label>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Categories
