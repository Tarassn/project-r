import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/App.scss';
import {products} from './data-file';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import HowItWorks from "./components/HowItWorks";
import UseCertificate from "./components/UseCertificate";


class App extends Component {
    state={
        products:{},
        priceFilter:{
            value: { min: 250, max: 4000 },
        },
        sortFilter:{value: "recommended"},
        categoriesFilter:{
            active:true,
            water:true,
            sport:true,
            excursion:true,
        },
        order:{},
        focusedPage: "Каталог впечатлений",
    };
    componentDidMount(){
        this.loadProducts()
    }
    loadProducts = () =>{
        this.setState({products:products})
    };
    priceFilterChange = (priceRange) => {
        this.setState({priceFilter:{
            value:priceRange
            }})
    };
    handleSortChange = (event) => {
        this.setState({sortFilter:{value: event.target.value}});
    };
    handleCategoriesChange = (event) => {

        const target = event.target;
        const name = target.getAttribute("data-name");
        const categoriesFilter = {...this.state.categoriesFilter};
        categoriesFilter[name] = !categoriesFilter[name];
        this.setState({
            categoriesFilter
        });

    };
    addToOrder = (id) => {
        const order = {...this.state.order};
        order[id] = order[id] +1 || 1;
        this.setState({ order });
    };
    deleteFromOrder = (id) => {
        const order = {...this.state.order};
        order[id] = order[id] -1 || 0;
        this.setState({ order });
    };
    clearOrder = () => {
        this.setState({ order:{}});
    };
    focusedPageHandler = (e) => {
        let target= e.currentTarget;
        if(target.classList.contains('navigation-focused')&&target.classList.contains('navigation-could-open')){
            this.setState({
                focusedPage:'',
            });
        }
        else {
            this.setState({
                focusedPage: target.dataset.name,
            })
        }
    };


    render() {
    return (
        <Router>
          <div className="App">
              <Header
                  products={this.state.products}
                  order={this.state.order}
                  addToOrder={this.addToOrder}
                  deleteFromOrder={this.deleteFromOrder}
                  clearOrder={this.clearOrder}
                  focusedPage={this.state.focusedPage}
                  focusedPageHandler={this.focusedPageHandler}
              />
              <main>
                  <Switch>
                      <Route exact path="/" component={()=>
                          <Main priceFilter={this.state.priceFilter}
                                sortFilter={this.state.sortFilter}
                                categoriesFilter={this.state.categoriesFilter}
                                priceFilterChange={this.priceFilterChange}
                                handleSortChange={this.handleSortChange}
                                handleCategoriesChange={this.handleCategoriesChange}
                                products={this.state.products}
                                order={this.state.order}
                                addToOrder={this.addToOrder}
                      />} />
                      <Route path="/Contacts" component={Contacts} />
                      <Route path="/HowItWorks" component={HowItWorks} />
                      <Route path="/UseCertificate" component={UseCertificate} />
                      <Route component={NotFound} />
                  </Switch>
              </main>
              <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
