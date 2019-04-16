import React, { Component } from 'react';

class FormEmail extends Component {

    render() {
        return (
            <div className="">
                Email:<br/>
                <input
                    type="text"
                    name="Email"
                    onChange={this.props.handleInput}
                    className="form-control"/>
                <label hidden={this.props.error.hideStatus}><br/>{this.props.error.message}</label>
            </div>
        );
    }
}

export default FormEmail;