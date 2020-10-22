export interface CharacterModel {
  name: string;
  description?: string;
  image: ImageModel[];
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
