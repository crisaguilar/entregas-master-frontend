import { Character } from "./character.api-model";

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`http://localhost:3000/api/character/${id}`);
  if(response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText)
  }
};
