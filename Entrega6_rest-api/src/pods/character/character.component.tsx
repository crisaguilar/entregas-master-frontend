import * as React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';



interface Props {
  character:Character;
}

export const CharacterComponent:React.FunctionComponent<Props> =(props)=>{
  const { character }=props;


  return (
    <div className={classes.root}>
      <img src={character.picture} /> 
      <ul>{character.id}</ul>
      <ul>{character.name}</ul>
      <ul>{character.species}</ul>
      <ul>{character.gender}</ul>
    </div>
  );
};

