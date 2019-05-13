import React, { Component } from 'react';
import "../css/Contacts.scss"


class Contacts extends Component {

    render() {
        return (
            <div className="Contacts">
                <div className="contacts__text-container">
                    <div className="contacts__call-us">
                        <h2>Контакты</h2><br/>
                        <h4>Dobo Ltd.</h4>
                        <h4>Киев, ул. Михайловская 24а</h4>
                        <h4><a className="Contacts__email" href="mailto:dobo@dobo.ua">dobo@dobo.ua</a>
                        </h4><br/>
                    </div>
                    <div className="contacts__call-us">
                        <h4>Звоните</h4>
                        <p>
                            <a className="contacts-info__link" href="tel:044 888 88 14">044 888 88 14</a>
                        </p>
                        <p>
                            <a className="contacts-info__link" href="tel:044 888 88 13">044 888 88 13</a>
                        </p>
                        <p>
                            <a className="contacts-info__link" href="tel:044 888 88 12">044 888 88 12</a>
                        </p>
                        <p>
                            <a className="contacts-info__link" href="tel:044 888 88 11">044 888 88 11</a>
                        </p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.28188309576!2d30.519101350845173!3d50.45447539485591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4549e8af4b%3A0x3675e09632d0dcdc!2zMjRBLCDRg9C7LiDQnNC40YXQsNC50LvQvtCy0YHQutCw0Y8sIDI00JAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1554975487920!5m2!1sru!2sua"
                    width="100%" title="google-maps" height="500" frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
}


export default Contacts;