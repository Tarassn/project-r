import React, { Component } from 'react';
import "../css/Footer.scss";
import {navObj} from '../data-file';
import logo from "../css/images/logo.png";
import FooterItem from "./FooterItem";


class Footer extends Component {
    state = {
        navObj: navObj,
    };

    render() {
        return(
            <footer className="footer">
                <img src={logo} alt="logo" className="footer__logo-img"/>
                <div className="footer__nav">
                {Object.keys(this.state.navObj).map(key =>
                    <FooterItem
                        key={key}
                        index={key}
                        itemDetails={navObj[key]}
                    />
                )}
                </div>
                <div className="footer__call-us">
                    <h4>Звоните</h4>
                    <p>
                        <a className="footer-info__link" href="tel:044 888 88 14">044 888 88 14</a>
                    </p>
                    <p>
                        <a className="footer-info__link" href="tel:044 888 88 13">044 888 88 13</a>
                    </p>
                    <p>
                        <a className="footer-info__link" href="tel:044 888 88 12">044 888 88 12</a>
                    </p>
                    <p>
                        <a className="footer-info__link" href="tel:044 888 88 11">044 888 88 11</a>
                    </p>
                </div>
                <div className="footer__write-us">
                    <h4>Пишите</h4>
                    <p>
                        <a className="footer-info__link" href="mailto:dobo@dobo.ua">e-mail:  dobo@dobo.ua</a>
                    </p>
                    <p>Киев, 04066, а/я 120</p>

                </div>
                <div className="footer__address">
                    <h4>Заходите в гости</h4>
                    <p>Киев, ул. Михайловская 24а</p>
                </div>
        </footer>)
    }
}


export default Footer