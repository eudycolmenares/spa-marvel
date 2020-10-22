export interface CharacterModel {
  name: string;
  description?: string;
  image: string;
  comics: ComicsModel[];
}

export interface ComicsModel {
  name: string;
  resourceURI: string;
}

interface ImageModel {
  extension: string;
  path: string;
}
