import { Character } from 'pods/character/api';
// import { CharactersApiResponse } from './character-collection.api-model';

const url = 'http://localhost:3000/api/character';

export const getCharacterCollection =
  async (): Promise<Character[]> => {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(response.statusText);
    }
  };
