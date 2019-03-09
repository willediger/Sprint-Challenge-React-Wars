import React from 'react';
import Character from './Character';
import './StarWars.css';

const Characters = props => (
  <ul className="character-list">
    {props.characters.map(c => (
      <li className="character">
        <Character
          character={c}
          key={c.url}
          capitalize={props.capitalize}
          getHomeWorld={props.getHomeWorld}
        />
      </li>
    ))}
  </ul>
);

export default Characters;