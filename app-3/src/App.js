import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      cheeses: ['havarti', 'jarlsberg', 'gruyère', 'brie', 'provolone', 'smoked cheddar', 'irish cheddar', 'sharp cheddar', 'mozzarella']
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let cheeseList = this.state.cheeses
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {cheeseList}
      </div>
    );
  }
}

export default App;