import * as React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Avatar, Typography } from '@mui/material';


interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <Avatar
        src={character.picture}
        alt={character.name}
        sx={{ width: 150, height: 150 }}
      ></Avatar>
      <div className={classes.info}></div>
      <Typography variant="h6">{character.name}</Typography>
      <Typography variant="subtitle1">Id: {character.id}</Typography>

      <Typography variant="subtitle1">Specie: {character.species}</Typography>
      <Typography variant="subtitle1">Gender: {character.gender}</Typography>
    </div>
  );
};
