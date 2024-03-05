import React from 'react';
import { Character, CharacterFormData } from './character.vm';
import { Character as ApiCharacter } from './api/character.api-model';
import { useParams } from 'react-router-dom';
import { getCharacter, saveCharacterSentence } from './api/character.api';
import { CharacterComponent } from './components/character.component';
import * as classes from './character.styles';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<Character>();
  const [isError, setIsError] = React.useState<boolean>(false);
  const handleApiCall = async (apiCall: () => Promise<ApiCharacter>) => {
    try {
      const apiCharacter = await apiCall();
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (error) {
      setIsError(true);
    }
  };

  const handleCharacter = () => {
    handleApiCall(() => getCharacter(id));
  };

  const onSave = (values: CharacterFormData) => {
    const payloadCharacter: Character = {
      ...character,
      bestSentences: values.bestSentences,
    };

    handleApiCall(() =>
      saveCharacterSentence(mapCharacterFromVmToApi(payloadCharacter))
    );
  };

  React.useEffect(() => {
    handleCharacter();
  }, []);
  if (isError) {
    return <div>Ops..Something went wrong</div>;
  }
  if (!character) {
    return <div>Loading...</div>;
  }
  return <CharacterComponent onSave={onSave} character={character} />;
};
