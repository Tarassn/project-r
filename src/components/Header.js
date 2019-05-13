import React, { Component } from 'react';
import {navObj} from '../data-file';
import logo from "../css/images/logo.png";
import searchIcon from "../css/images/searchIcon.svg";
import cartIcon from "../css/images/shopping-cart-of-checkered-design.png";
import "../css/Header.scss";
import Burger from './Burger';
import NavigationItem from "./NavigationItem";
import Cart from "./Cart";

export default class Header extends Component {
    state = {
        navObj: navObj,
        burgerOpen:false,
        navOpen:false,
        width: 0,
        cartOpen:false,
    };

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    componentDidUpdate(){

    }

    toggleBurger = (e) => {
        this.setState({
            burgerOpen: !(this.state.burgerOpen),
        });
        e.currentTarget.classList.toggle('open')
    };

    toggleCart = () => {
        this.setState({
            cartOpen: !(this.state.cartOpen),
        });
    };

    totalItems = () =>{
        let total = Object.keys(this.props.order).reduce((previousValue, key) =>{
            const count = this.props.order[key];
            return previousValue + count;
        },0);
        return total
    };

    changeNavStyle = () => {
        if (this.state.width > 1024||this.state.burgerOpen){
            return {
                display:'inline-flex'
            }
        }
        return {
            display:'none'
        }
    };

    render() {
        return (
            <header className="header">
                    <img src={logo} alt="logo" className="header__logo-img"/>
                <nav>
                    <nav className={'header__nav'} style={this.changeNavStyle()}>
                        {Object.keys(this.state.navObj).map(key =>
                            <NavigationItem
                                key = {key}
                                index = {key}
                                itemDetails={this.state.navObj[key]}
                                focusedPageHandler={this.props.focusedPageHandler}
                                focused={this.props.focusedPage}
                            />
                        )}
                    </nav>
                </nav>
                <div className="header__right-block">
                    <div className="navigation__buttons">
                        <input type="text" className="navigation__search" style={
                            {backgroundImage:`url(${searchIcon})`,
                            backgroundPosition:"5% 50%",
                            outline:"none",
                            backgroundRepeat: "no-repeat",
                            border: "2px solid #ccc",
                            borderRadius: "4px",
                            padding:"5px",
                            paddingLeft:"28px"}
                        }/>
                    </div>
                </div>
                <div className="navigation__buttons cartIcon-container">
                    <img className='cartIcon' src={cartIcon} alt="Cart" onClick={this.toggleCart}/>
                    <div className="cartIcon-total" onClick={this.toggleCart}>{this.totalItems()}</div>
                    {this.state.cartOpen?
                        <Cart
                            products={this.props.products}
                            order={this.props.order}
                            addToOrder={this.props.addToOrder}
                            deleteFromOrder={this.props.deleteFromOrder}
                            clearOrder={this.props.clearOrder}
                            toggleCart={this.toggleCart}
                        />
                        :null}
                </div>
                <Burger
                    burgerOpen={this.state.burgerOpen}
                    toggleBurger={this.toggleBurger}
                />
            </header>
        );
    }
}