import React, { Component } from 'react';
import './css/App.scss';
import {products} from './data-file';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Filters from "./components/Filters";
import Products from "./components/Products";


class App extends Component {
    state={
        products:{},
        priceFilter:{
            value: { min: 250, max: 9000 },
        }
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
  render() {
    return (
      <div className="App">
          <Header/>
          <main>
              <Slider/>
              <Filters
              priceFilter={this.state.priceFilter}
              priceFilterChange={this.priceFilterChange}/>
              <Products
              products={this.state.products}/>
          </main>

      </div>
    );
  }
}

export default App;
