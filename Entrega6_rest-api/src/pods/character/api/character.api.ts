import { Character } from './character.api-model';

const CharacterListURL = `http://localhost:3000/api/character/`;

export const getCharacter = async (id: string) => {
  const response = await fetch(`${CharacterListURL}/${id}`);
  if (response.ok) {
    return response.json() as Promise<Character>;
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacterSentence = async (character: Character) => {
  const response = await fetch(`${CharacterListURL}/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  if (response.ok) {
    return response.json() as Promise<Character>;
  } else {
    throw Error(response.statusText);
  }
};
