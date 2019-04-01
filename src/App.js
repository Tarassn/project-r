import React, { Component } from 'react';
import './css/App.scss';
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <header className="App-header">
            HOME
        </header>
      </div>
    );
  }
}

export default App;
