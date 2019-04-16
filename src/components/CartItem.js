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
                    {`${title} -  ${price}₴ x ${(this.props.order)?this.props.order:0}`}
                    <br/>
                    <button onClick={this.handleClickAdd}>+1</button>
                    <button onClick={this.handleClickDelete} disabled={(this.props.order<=0)}>-1</button>
                    <img src={image} alt={title} style={{width:"80px", position:"absolute", right:"40px", top:"-5px"}}/>
                    <br/>
                    <hr/>
                </div>
                :null}
            </div>
        );
    }
}

export default CartItem;