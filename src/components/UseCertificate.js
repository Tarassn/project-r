import React, { Component } from 'react';
import "../css/UseCertificate.scss"
import goodToKnow1 from '../css/images/silence-face.svg';
import goodToKnow2 from '../css/images/boy-winking.svg';
import goodToKnow3 from '../css/images/boy-with-love-face.svg';
import UseCertificateForm from "./UseCertificateForm";


class UseCertificate extends Component {

    render() {
        let fishText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n" +
            "                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
            "                                ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        return (
            <div className="UseCertificate">
                <h2>Используйте сертификат</h2>
                <div className="UseCertificate__container">
                    <div className="UseCertificate__boxes">
                        <section>
                            <h3>Шаг 1</h3>
                            <p>{fishText}</p>
                        </section>
                        <section>
                            <h3>Шаг 2</h3>
                            <p>{fishText}</p>
                        </section>
                        <section>
                            <h3>Шаг 3</h3>
                            <p>{fishText}</p>
                        </section>
                        <section>
                            <h3>Шаг 4</h3>
                            <p>{fishText}</p>
                        </section>

                    </div>
                    <UseCertificateForm/>
                </div>
                <div className="UseCertificate__good-to-know">
                    <div className="UseCertificate__good-to-know_item">
                        <img src={goodToKnow1} alt="good-to-know"/>
                        <p>Перенести или отменить ваше впечатление можно не позже, чем за 1 сутки до забронированной даты.</p>
                    </div>
                     <div className="UseCertificate__good-to-know_item">
                        <img src={goodToKnow2} alt="good-to-know"/>
                        <p>Если впечатление зависит от погоды и в день проведения будет плохая погода, впечатление может быть перенесено на другую дату и время.</p>
                    </div>
                     <div className="UseCertificate__good-to-know_item">
                        <img src={goodToKnow3} alt="good-to-know"/>
                        <p>Если не нашлось подходящего впечатления в подарке, вы можете обменять сертификат, разделить его или выбрать впечатление дороже.

                        </p>
                    </div>

                </div>
            </div>
        );
    }
}


export default UseCertificate