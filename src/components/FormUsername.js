import React, { Component } from 'react';

class FormUsername extends Component {

    render() {
        return (
            <div className="">
                ФИО:<br/>
                <input
                    type="text"
                    name="Username"
                    onChange={this.props.handleInput}
                    className="form-control"
                />
                <label hidden={this.props.error.hideStatus}><br/>{this.props.error.message}</label>
            </div>
        );
    }
}

export default FormUsername;