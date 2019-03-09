import React from 'react';
import Character from './Character';
import './StarWars.css';

const Characters = props => (
  <ul className="ui list">
    <li>
      {props.characters.map(c => (
        <Character
          character={c}
          key={c.url}
        />
      ))}
    </li>
  </ul>
);

export default Characters;