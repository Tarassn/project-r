import React, { Component } from 'react';


class Product extends Component {
    categoriesCompare = (arr) =>{
        let match = false;
        Object.keys(this.props.categoriesFilter).map((key)=>{
            if(this.props.categoriesFilter[key]) {
                if(arr.includes(key)){
                    match = true;
                    return match;
                }
            }
        });
        return match;
    };

    render() {
        let {image,title,text,price,categories,participants,quantity} = this.props.product;
        let {min, max} = this.props.priceFilter.value;
        let isCategoriesFit = (this.categoriesCompare(categories));
        let isPriceFit =  (min < price && price < max);
        let display = isPriceFit && isCategoriesFit ?"block":"none";
        return (
            <section className="product" style={{display:display}}>
                <img src={image} alt={title}/>
                <div className="product__text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="product__desc">
                    <span>{price}грн</span>
                    <span>{participants}чел.</span>
                    <span>{quantity}</span>
                </div>
                <button className="product__desc_btn" onClick={()=>{this.props.addToOrder(this.props.id)}}>Подарить</button>
            </section>
        );
    }
}


export default Product