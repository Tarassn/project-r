import React, { Component } from 'react';
import '../css/Slider.scss';
import {sliderItems} from '../data-file';

export default class Slider extends Component {
        state = {
            key:'0',
            images: '',
        };

    setImage = (images) => {
        this.setState({
            images:images,
        });
    };
    changeKey = () => {
        let imageCount = Object.keys(this.state.images).length;
        let key = this.state.key;
        key++;
        if (key >= imageCount){
            key='0';
        }
        this.setState({key})
    };
    timer = () => {
        setInterval(this.changeKey, 4000)
    };


    componentDidMount(){
        const images=sliderItems;
        if (this.state.images === '') {
            this.setImage(images);
        }
        this.timer();
    }

    componentDidUpdate(){
    }



    render(){
        const imageKey=this.state.key;
        return (
            <div className="slider" style={{backgroundImage: "url(" + this.state.images[imageKey]+ ")"}}>
                <section className="slider__text-block">
                    <span>DOBO'S PHILOSOPHY</span>
                    <h2>YOUR FEELINGS IS OUR DRIVING FORCES</h2>
                    <p>bla bla bla bla bla</p>
                </section>
            </div>

        );
    }
}