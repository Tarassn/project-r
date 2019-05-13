import React, { Component } from 'react';
import '../css/Slider.scss';
import { CSSTransitionGroup } from 'react-transition-group'
import {sliderItems} from '../data-file';
import SliderDot from "../components/SliderDot"

export default class Slider extends Component {
        state = {
            key:0,
            sliderItems: {},
        };

    changeKey = (difference) => {
        let imageCount = Object.keys(this.state.sliderItems).length;
        let key = this.state.key;
        key = key + difference ;
        if (key >= imageCount){
            key=0;
        }
        if (key < 0){
            key=imageCount -1;
        }
        clearInterval(this.sliderInterval);
        this.timer();
        this.setState({key})
    };

    timer = () => {
        this.sliderInterval = setInterval(()=>{this.changeKey(+1)}, 4000)
    };

    changeKeyOnDot = (key) => {
        clearInterval(this.sliderInterval);
        this.timer();
        this.setState({
            key:+key
        })
    };


    componentDidMount(){
        this.timer();
        this.setState({
            sliderItems:sliderItems,
        });
    };

    componentWillUnmount() {
        clearInterval(this.sliderInterval);
    };

    render(){
        const imageKey=this.state.key;
        return (
            <div className="slider-container">
            <CSSTransitionGroup
                transitionName="background"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}>
            <div className="slider" key={imageKey}>
                <div className="slider-arrows slider-arrows_left" onClick={()=>{this.changeKey(-1)}}>{'<'}</div>
                <section className="slider__text-block">
                    <span>DOBO'S PHILOSOPHY</span>
                    <h2>{(this.state.sliderItems[imageKey])?this.state.sliderItems[imageKey].text: null}</h2>
                    <p>bla bla bla bla bla</p>
                </section>
                <div className="slider-dots">
                    {(this.state.sliderItems[imageKey])?
                        Object.keys(this.state.sliderItems).map(key=>(
                        <SliderDot
                            key={key}
                            id={key}
                            sliderItem={this.state.sliderItems[key]}
                            focused={this.state.key===+key}
                            changeKeyOnDot={this.changeKeyOnDot}/>
                    ))
                        :null}
                </div>
                <img alt='' src={(this.state.sliderItems[imageKey])?this.state.sliderItems[imageKey].image: null}/>
                <div className="slider-arrows slider-arrows_right" onClick={()=>{this.changeKey(+1)}}>{'>'}</div>
            </div>
            </CSSTransitionGroup>
            </div>

        );
    }
}