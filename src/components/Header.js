import React, { Component } from 'react';
import {navObj as navObj} from '../data-file';
import logo from "../css/images/logo.png";
import searchIcon from "../css/images/searchIcon.svg";
import cartIcon from "../css/images/shopping-cart-of-checkered-design.png";
import "../css/Header.scss";
import Burger from './Burger';
import NavigationItem from "./NavigationItem";
import {Link} from "react-router-dom";

export default class Header extends Component {
        state = {
            navObj: navObj,
            focused:'',
            burgerOpen:false,
            navOpen:false,
            width: 0,
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

    clickHandler = (e) => {
        if(e.currentTarget.classList.contains('navigation-focused')){
            this.setState({
                focused:'',
            });
        }
        else {
            this.setState({
                focused: e.currentTarget.dataset.name,
            })
        }
    };

    toggleBurger = (e) => {
        this.setState({
            burgerOpen: !(this.state.burgerOpen),
        });
        e.currentTarget.classList.toggle('open')

    };
    changeNavStyle = () => {
        if (this.state.width > 1024||this.state.burgerOpen){
            return {
                display:'inline-flex'
            }
        }
        // if(this.state.burgerOpen){
        //     return {
        //         display:'inline-flex'
        //     }
        // }
        return {
            display:'none'
        }
    };
    render() {
        return (
            <header className="header">
                <a href='#'>
                    <img src={logo} alt="logo" className="header__logo-img"/>
                </a>
                <nav>
                    <nav className={'header__nav'} style={this.changeNavStyle()}>
                        {Object.keys(this.state.navObj).map(key =>
                            <NavigationItem
                                key = {key}
                                index = {key}
                                itemDetails={this.state.navObj[key]}
                                clickHandler={this.clickHandler}
                                focused={this.state.focused}
                            />
                        )}
                    </nav>
                </nav>
                <div className="header__right-block">
                    <div className="navigation__buttons">
                        <input type="text" style={
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
                    <div className="navigation__buttons">
                        <Link to={"/UseCertificate"}>
                        <img className={'cartIcon'} src={cartIcon} alt={"Cart"}/>
                        </Link>
                    </div>
                </div>
                <Burger
                    burgerOpen={this.state.burgerOpen}
                    toggleBurger={this.toggleBurger}
                />
            </header>
        );
    }
}