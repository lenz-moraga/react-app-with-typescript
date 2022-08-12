import React from 'react'
import { Char } from './types';

interface Props {
  characters: Array<Char>
}

const List = ({ characters }: Props) => {
  const renderList = (): Array<JSX.Element> => (
    characters.map(char => {
      return (
        <li key={char.name}>
          <img src={char.image} alt={`Avatar for ${char.name}`} />
          <h4>{char.name} (<small>{char.status}</small>)</h4>
          <p>{char.species?.substring(0, 100)}</p>
        </li>
      );
    })
  );

  return (
    <ul>{ renderList() }</ul>
  )
}

export default List