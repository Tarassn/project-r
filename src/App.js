import React, { Component } from 'react';
import './css/App.scss';
import {products} from './data-file';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Filters from "./components/Filters";
import Products from "./components/Products";


class App extends Component {
    state={
        products:{}
    };
    componentDidMount(){
        this.loadProducts()
    }
    loadProducts = () =>{
        this.setState({products:products})
    };
  render() {
    return (
      <div className="App">
          <Header/>
          <main>
              <Slider/>
              <Filters/>
              <Products
              products={this.state.products}/>
          </main>

      </div>
    );
  }
}

export default App;
