import React from 'react';
import {Link} from "react-router-dom";

const FooterItem = (props) => (
    <div className="footer__item">
        <Link to={props.itemDetails.link} className="footer__item_link">
            <p>{props.itemDetails.name}</p>
        </Link>
    </div>
);
export default FooterItem;