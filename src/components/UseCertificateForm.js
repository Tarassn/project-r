import React, { Component } from 'react';
import FormUsername from "./FormUsername";
import FormEmail from "./FormEmail";
import FormAgree from "./FormAgree";
import FormCertificateNumber from "./FormCertificateNumber";

class UseCertificateForm extends Component {
    state ={
        inputs:{
            Username:"",
            Email: "",
            CertificateNumber:"",
            Agree: false,
        },
        errorValidation:{
            Username: {message:"FormUsername must be filled",
                hideStatus:true},
            Email: {message:"FormEmail must be filled",
                hideStatus:true},
            Agree: {message:"FormAgree must be checked",
                hideStatus:true},
            CertificateNumber: {message:"CertificateNumber must be filled",
                hideStatus:true},
        },


    };
    handleInput = (e) => {
        const inputs = {...this.state.inputs};
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        inputs[name] = value;
        this.setState({
            inputs
        });
    };
    handleSubmit = (e) => {
        this.validateInputs();
        let formValidated = true;
        let errors = {...this.state.errorValidation};
        Object.keys(errors).map((key)=>{
            if(errors[key].hideStatus===false){
                formValidated = false;
            }
            return null
        });
        if(formValidated) {
            alert(JSON.stringify(this.state.inputs));
        }
        e.preventDefault();
    };
    validateInputs = () => {
        let errors = {...this.state.errorValidation};
        Object.keys(errors).map((key) =>{
            this.validateText(key);
            this.validateAgree(key);
            return null
        })
    };
    validateText = (key) => {
        let errors = {...this.state.errorValidation};

        if (key ==='Username'|| key ==='Email'||"CertificateNumber") {
            if (this.state.inputs[key].length < 1) {
                errors[key].hideStatus = false;
                this.setState({
                    errorValidation: errors
                })
            }
            else if (this.state.inputs[key].length > 0) {
                errors[key].hideStatus = true;
                this.setState({
                    errorValidation: errors
                })
            }
        }
    };
    validateAgree = (key) => {
        let errors = {...this.state.errorValidation};
        if (key ==='Agree') {
            if(this.state.inputs['Agree']===false) {
                errors[key].hideStatus = false;
                this.setState({
                    errorValidation: errors
                })
            }
            else if(this.state.inputs['Agree']===true){
                errors[key].hideStatus = true;
                this.setState({
                    errorValidation: errors
                })
            }
        }
    };
    render() {
        return (
            <div className="UseCertificate__form">
                <h2>Введите ваши данные для активации сертификата</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormUsername
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Username}/>
                    <FormEmail
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Email}/>
                    <FormCertificateNumber
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.CertificateNumber}
                    />
                    <FormAgree
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Agree}/>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="UseCertificate__btn"
                        >Активировать</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UseCertificateForm;