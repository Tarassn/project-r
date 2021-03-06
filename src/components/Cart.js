import React, { Component } from 'react';
import CartItem from "./CartItem";
import "../css/Cart.scss";
import closeIcon from "../css/images/close-button.svg";



class Cart extends Component {
    componentDidMount(){
        this.totalSum();
    }

    totalSum = () =>{
        let total = Object.keys(this.props.order).reduce((previousValue, key) =>{
            const item = this.props.products[key];
            const count = this.props.order[key];
            return previousValue + count * item.price;
        },0);
        return total
    };

    purchaseProducts = () => {
        alert(JSON.stringify(this.props.order));
        this.props.clearOrder();
    };

    render() {
        return (
            <div className={'Cart'}>
                <div>
                    {Object.keys(this.props.order).length<=0?"Корзина пуста":null}
                    {Object.keys(this.props.order).map((key) => (
                        <CartItem
                            product={this.props.products[key]}
                            key={key}
                            id={key}
                            order={this.props.order[key]}
                            addToOrder={this.props.addToOrder}
                            deleteFromOrder={this.props.deleteFromOrder}
                        />
                    ))
                    }
                </div>
                <span>Всего:{this.totalSum()}₴</span><br/>
                <button
                    className="Cart__btn"
                    onClick={this.purchaseProducts}
                    disabled={(Object.keys(this.props.order).length < 1)}
                >Приобрести</button>
                <button
                    className="Cart__btn"
                    onClick={this.props.clearOrder}
                    disabled={(Object.keys(this.props.order).length < 1)}
                >Очистить</button>
                <div>
                    <img className="cart_close-icon" alt="cart icon" src={closeIcon} onClick={this.props.toggleCart}/>
                </div>
            </div>
        );
    }
}


export default Cart;