import React, { Component } from 'react';
import CartItem from "./CartItem";
import "../css/Cart.scss";



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
    render() {

        return (
            <div className={'Cart'}>
                <div className={'row'}>
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
                <span>Total:${this.totalSum()}</span>
                <button
                    className={'btn btn-success'}
                    // onClick={this.props.checkoutOrder}
                    disabled={(Object.keys(this.props.order).length < 1)}
                >Checkout</button>
            </div>
        );
    }
}


export default Cart;