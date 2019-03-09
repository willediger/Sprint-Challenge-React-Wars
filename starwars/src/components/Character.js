import React from 'react';
import './StarWars.css';

const Character = props => (
  <ul className="ui list">
    <li>
      {props.character.name}
    </li>
  </ul>
);

export default Character;