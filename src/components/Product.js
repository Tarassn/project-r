import React, { Component } from 'react';


class Product extends Component {

    render() {
        let {image,title,text,price,participants,quantity} = this.props.product;
        return (
            <section className="product">
                <img src={image} alt={title}/>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="product__desc">
                    <span>{price}грн</span>
                    <span>{participants}чел.</span>
                    <span>{quantity}</span>
                </div>
                <button className="product__desc_btn">Подарить</button>
            </section>
        );
    }
}


export default Product