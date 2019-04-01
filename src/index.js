import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './css/index.scss';
import App from './App';
import NotFound from "./components/NotFound"
import Contacts from "./components/Contacts"
import HowItWorks from "./components/HowItWorks"
import UseCertificate from "./components/UseCertificate"

const routing = (
    <Router>
        <div>
            <Link to="contacts">Contacts</Link>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Contacts" component={Contacts} />
                <Route path="/HowItWorks" component={Contacts} />
                <Route path="/UseCertificate" component={Contacts} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


