import React, { Component } from 'react';

class FormCertificateNumber extends Component {

    render() {
        return (
            <div className="">
                <div>
                    Номер сертификата:<br/>
                    <input
                        type="text"
                        name="CertificateNumber"
                        onChange={this.props.handleInput}
                        className=""/>
                    <label hidden={this.props.error.hideStatus}><br/>{this.props.error.message}</label>
                </div>
            </div>
        );
    }
}

export default FormCertificateNumber;