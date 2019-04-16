import React, { Component } from 'react';

class FormAgree extends Component {

    render() {
        return (
            <div className="">
                <input
                    type="checkbox"
                    name="Agree"
                    onChange={this.props.handleInput}
                    className=""/> Я соглашаюсь на всё...
                <label hidden={this.props.error.hideStatus}><br/>{this.props.error.message}</label>
            </div>
        );
    }
}

export default FormAgree;