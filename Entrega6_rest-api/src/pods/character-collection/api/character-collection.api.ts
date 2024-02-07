import { CharactersApiResponse } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection =
  async (): Promise<CharactersApiResponse> => {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(response.statusText);
    }
  };
