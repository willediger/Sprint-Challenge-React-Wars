import React, { Component } from 'react';
import Characters from './components/Characters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  // getHomeWorld = charName => {
  //   const charIdx = this.state.starwarsChars.map(e => e.name).indexOf(charName)
  //   const homeWorldURL = this.state.starwarsChars[charIdx].homeworld;
  //   const homeWorld = this.getResults(homeWorldURL).name
  //   // console.log(homeWorld)
  //   console.log(JSON.stringify(homeWorld))
  //   return homeWorld
  //   // return homeWorld;
  // }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  // getResults = URL => {
  //   fetch(URL)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     return data;
  //   })
  //   .catch(err => {
  //     throw new Error(err);
  //   });
  // }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters 
          characters={this.state.starwarsChars}
          capitalize={this.capitalize}
          getHomeWorld={this.getHomeWorld}
        />
      </div>
    );
  }
}

export default App;
