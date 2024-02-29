export interface Character {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  bestSentences?: string[];
}

export interface CharacterFormData{
  bestSentences: string[];
}
