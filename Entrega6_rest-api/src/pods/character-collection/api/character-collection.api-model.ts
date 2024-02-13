import { Character as CharacterEntityApi } from 'pods/character/api';

export interface CharactersApiResponse {
  results: CharacterEntityApi[];
}

// This was needed for the original API, deprecated with JSON-server
