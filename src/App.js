import React, { Component } from 'react';
import './css/App.scss';
import {sliderItems} from './data-file';
import Header from "./components/Header";
import Slider from "./components/Slider";

class App extends Component {
    state={
        sliderItems:{}
    };
  render() {
    return (
      <div className="App">
          <Header/>
          <Slider/>
        <header className="App-header">
            HOME
        </header>

      </div>
    );
  }
}

export default App;
