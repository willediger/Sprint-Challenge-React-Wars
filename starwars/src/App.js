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

  getHomeWorld = charName => {
    const charIdx = this.state.starwarsChars.map(e => e.name).indexOf(charName)
    const homeWorldURL = this.state.starwarsChars[charIdx].homeworld;
    this.getResults(charIdx, homeWorldURL);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  getResults = (charIdx, URL) => {
    // let result;
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(prevState => {
          const newState = prevState.starwarsChars;
          newState[charIdx].homeWorldName = data.name
          return { starwarsChars: newState }
        })
      })
      .catch(err => {
        throw new Error(err);
      });
    // return result;
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(
          { starwarsChars: data.results },
          () => {
            this.state.starwarsChars.forEach((e, i) => {
              this.getHomeWorld(e.name);
            })
          }
        )
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
