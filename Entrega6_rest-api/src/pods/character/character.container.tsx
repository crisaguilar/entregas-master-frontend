import * as React from 'react';
import { Character } from './character.vm';
import { useParams } from 'react-router-dom';
import { getCharacter } from './api/character.api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm } from './character.mappers';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<Character>();

  const handleCharacter = async () => {
    const apiCharacter = await getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    handleCharacter();
  }, []);

  return <CharacterComponent character={character} />;
};
