import React from 'react';
import './StarWars.css';

const Character = props => {
  const char = props.character;
  return (
    <>
      <h2>{char.name}</h2>
      <ul className="ui list attributes">
        <li>Height: {char.height} cm</li>
        <li>Mass: {char.mass} kg</li>
        <li>Skin Color: {props.capitalize(char.skin_color)}</li>
        <li>Eye Color: {props.capitalize(char.eye_color)}</li>
        <li>Birth Year: {props.capitalize(char.birth_year)}</li>
        <li>Gender: {props.capitalize(char.gender)}</li>
        <li>Home World: {char.homeWorldName}</li>
      </ul>
    </>
  );
}


export default Character;

// "name": "Luke Skywalker", 
//     "height": "172", 
//     "mass": "77", 
//     "hair_color": "blond", 
//     "skin_color": "fair", 
//     "eye_color": "blue", 
//     "birth_year": "19BBY", 
//     "gender": "male", 
//     "homeworld": "https://swapi.co/api/planets/1/", 
//     "films": [
//         "https://swapi.co/api/films/2/", 
//         "https://swapi.co/api/films/6/", 
//         "https://swapi.co/api/films/3/", 
//         "https://swapi.co/api/films/1/", 
//         "https://swapi.co/api/films/7/"
//     ], 
//     "species": [
//         "https://swapi.co/api/species/1/"
//     ], 
//     "vehicles": [
//         "https://swapi.co/api/vehicles/14/", 
//         "https://swapi.co/api/vehicles/30/"
//     ], 
//     "starships": [
//         "https://swapi.co/api/starships/12/", 
//         "https://swapi.co/api/starships/22/"
//     ], 
//     "created": "2014-12-09T13:50:51.644000Z", 
//     "edited": "2014-12-20T21:17:56.891000Z", 
//     "url": "https://swapi.co/api/people/1/"