import React, { Component } from 'react';
import './css/App.scss';
import {products} from './data-file';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Filters from "./components/Filters";
import Products from "./components/Products";
import Footer from "./components/Footer";


class App extends Component {
    state={
        products:{},
        priceFilter:{
            value: { min: 250, max: 9000 },
        },
        sortFilter:{value: "recommended"},
        categoriesFilter:{
            active:true,
            water:true,
            sport:true,
            excursion:true,
        },
        order:{},
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
        const order = {...this.state.order};
        this.setState({ order:{}});
    };
  render() {
    return (
      <div className="App">
          <Header
              products={this.state.products}
              order={this.state.order}
              addToOrder={this.addToOrder}
              deleteFromOrder={this.deleteFromOrder}
              clearOrder={this.clearOrder}
          />
          <main>
              <Slider/>
              <Filters
                  priceFilter={this.state.priceFilter}
                  sortFilter={this.state.sortFilter}
                  categoriesFilter={this.state.categoriesFilter}
                  priceFilterChange={this.priceFilterChange}
                  handleSortChange={this.handleSortChange}
                  handleCategoriesChange={this.handleCategoriesChange}/>
              <Products
                  priceFilter={this.state.priceFilter}
                  sortFilter={this.state.sortFilter}
                  categoriesFilter={this.state.categoriesFilter}
                  products={this.state.products}
                  order={this.state.order}
                  addToOrder={this.addToOrder}
                  />
          </main>
          <Footer/>
      </div>
    );
  }
}

export default App;
