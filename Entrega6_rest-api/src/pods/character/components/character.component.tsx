import * as React from 'react';
import { Character } from '../character.vm';
import * as classes from '../character.styles';
import { Avatar, Typography } from '@mui/material';
import { CharacterFormComponent } from './character-form.component';
import { saveCharacterSentence } from '../api/character.api';

interface Props {
  character: Character;
  onSave: (value: { bestSentences: string }) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const { onSave } = props;

  return (
    <div className={classes.root}>
      <Avatar
        src={character.image}
        alt={character.name}
        sx={{ width: 150, height: 150 }}
      ></Avatar>
      <div className={classes.info}></div>
      <Typography variant="h6">{character.name}</Typography>
      <Typography variant="subtitle1">Id: {character.id}</Typography>
      <Typography variant="subtitle1">Specie: {character.species}</Typography>
      <Typography variant="subtitle1">Gender: {character.gender}</Typography>
      <CharacterFormComponent
        bestSentences={character.bestSentences}
        onSave={onSave}
      />
    </div>
  );
};
