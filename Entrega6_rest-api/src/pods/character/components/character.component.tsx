import * as React from 'react';
import { Character } from '../character.vm';
import * as classes from '../character.styles';
import { Avatar, Button, Typography } from '@mui/material';
import { CharacterFormComponent } from './character-form.component';

interface Props {
  character: Character;
  onSave: (value: { bestSentences: string }) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const { onSave } = props;
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = (value) => {
    handleEdit();
    onSave(value);
  };

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
      {!isEdit && (
        <>
          <Typography variant="subtitle1">
            Best Sentences: {character.bestSentences}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit
          </Button>
        </>
      )}
      {isEdit && (
        <CharacterFormComponent
          bestSentences={character.bestSentences}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
