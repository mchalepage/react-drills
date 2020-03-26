import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Image url={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png'}/>
      </div>
    )
  }
}

export default App;
