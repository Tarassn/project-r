import React, { Component } from 'react';
import "../css/Categories.scss"

class Categories extends Component {
    state={
        isOpen:false,
    };
    toggle = () => {
        let isOpen = !this.state.isOpen;
        console.log(isOpen)
        this.setState({
            isOpen,
        })
    };
    render() {
        let openMenu = this.state.isOpen ? "block" : "none";
        let checked = this.state.isOpen ? "true" : "";
        return (
            <div className="categories" onClick={this.toggle}>
                <input
                    className="categories-checkbox"
                    type="checkbox"
                    checked={checked}
                /><label className="categories__category">Категории</label>
                <ul className="categories__submenu" style={{display:openMenu}}>
                    <li><input type="checkbox" value=""/><label className="categories__types"><span></span>Финансы</label>
                    </li>
                    <li><input type="checkbox" value=""/><label className="categories__types"><span></span>Услуги</label>
                    </li>
                    <li><input type="checkbox" value=""/><label className="categories__types"><span></span>Ритейл</label>
                    </li>
                    <li><input type="checkbox" value=""/><label className="categories__types"><span></span>Фармацевтика</label>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Categories
