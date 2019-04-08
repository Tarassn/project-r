import React, { Component } from 'react';



class CartItem extends Component {
    handleClickAdd = () =>{
        this.props.addToOrder(this.props.id)
        console.log(this.props.id)
    };
    handleClickDelete = () =>{
        this.props.deleteFromOrder(this.props.id)
    };
    render() {
        let {title,price,quantity} = this.props.product;
        return (
            <div className={'CartItem col-md-4'}>
                {`${title} - $ ${price} x ${(this.props.order)?this.props.order:0}`}
                <br/>
                <button onClick={this.handleClickAdd}>+1</button>
                <button onClick={this.handleClickDelete} disabled={(this.props.order<=0)}>-1</button>
                <br/>
<hr/>
            </div>
        );
    }
}

export default CartItem;