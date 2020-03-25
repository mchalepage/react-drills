import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      cheeses: ['havarti', 'jarlsberg', 'gruyère', 'brie', 'provolone', 'smoked cheddar', 'irish cheddar', 'sharp cheddar', 'mozzarella']
    }
  }


  render () {
    let cheeseList = this.state.cheeses.map((element, index) => {
    return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        {cheeseList}
      </div>
    );
  }

}


export default App;
