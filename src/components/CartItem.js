import React, { Component } from 'react';



class CartItem extends Component {
    handleClickAdd = () =>{
        this.props.addToOrder(this.props.id);
        console.log(this.props.id)
    };

    handleClickDelete = () =>{
        this.props.deleteFromOrder(this.props.id)
    };

    render() {
        let {title,price, image} = this.props.product;
        return (
            <div>
            {this.props.order>0?
                <div className={'CartItem'}>

                    <p>{`${title} -  ${price}₴ x ${(this.props.order)?this.props.order:0}`}</p>

                    <button onClick={this.handleClickAdd} className="Cart__small-btn">+1</button>
                    <button onClick={this.handleClickDelete} disabled={(this.props.order<=0)} className="Cart__small-btn">-1</button>
                    <img src={image} className="Cart__item-img" alt={title} />
                    <br/>
                    <hr/>
                </div>
                :null}
            </div>
        );
    }
}

export default CartItem;