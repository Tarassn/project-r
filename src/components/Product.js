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
            return null;
        });
        return match;
    };

    render() {
        let {image,title,text,price,categories,participants,quantity} = this.props.product;
        let isCategoriesFit = (this.categoriesCompare(categories));
        let isPriceFit =  this.props.isPriceFit;
        let isBtnActive = (this.props.order[this.props.id] > 0);
        let display = isPriceFit && isCategoriesFit ?"block":"none";
        let btnActiveStyle= {backgroundColor: "#ed4457",
                       boxShadow: "0 15px 40px 0 rgba(196, 67, 81, 0.6)"};
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
                <button className="product__desc_btn"
                        onClick={()=>{this.props.addToOrder(this.props.id)}}
                        style={isBtnActive ? btnActiveStyle : null}
                >{isBtnActive ? `В корзине ${this.props.order[this.props.id]} +` : "Подарить"}</button>
            </section>
        );
    }
}


export default Product