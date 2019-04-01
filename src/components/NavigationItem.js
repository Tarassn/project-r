import React, { Component } from 'react';

class NavigationItem extends Component {
    render() {
        const {name, subItems, image} = this.props.itemDetails;
        const isFocused=(this.props.focused === name);
        return (
            <div>
                <div
                    className={(isFocused)?'navigation__buttons navigation-focused':'navigation__buttons'}
                    data-name={name}
                    onClick={this.props.clickHandler}>
                    <span>{name}</span>
                </div>
                <div className={(isFocused)?'navigation__submenu navigation__submenu-active':'navigation__submenu'}>
                    <div className={'navigation__submenu-block'}>
                    {
                        Object.keys(subItems).map(key =>(
                        <div key={key} > {
                            subItems[key]}</div>
                    ))}
                    </div>
                    <div className={'navigation__submenu_image-container'}>
                    {(image)?<img src={image}/> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationItem

