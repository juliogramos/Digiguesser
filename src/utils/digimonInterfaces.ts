// Digimon Interfaces
export interface ImageInterface {
  href: string;
  transparent: boolean;
}

export interface LevelInterface {
  id: number;
  level: string;
}

export interface TypeInterface {
  id: number;
  type: string;
}

export interface AttributeInterface {
  id: number;
  attribute: string;
}

export interface FieldInterface {
  id: number;
  field: string;
  image: string;
}

export interface DescriptionInterface {
  origin: string;
  language: string;
  description: string;
}

export interface SkillInterface {
  id: number;
  skill: string;
  translation: string;
  description: string;
}

export interface ShortDigimonInterface {
  id: number;
  digimon: string;
  condition: string;
  image: string;
  url: string;
}

export interface DigimonInterface {
  id: number;
  name: string;
  xAntibody: boolean;
  images: ImageInterface[];
  levels: LevelInterface[];
  types: TypeInterface[];
  attributes: AttributeInterface[];
  fields: FieldInterface[];
  releaseDate: string;
  descriptions: DescriptionInterface[];
  skills: SkillInterface[];
  priorEvolutions: ShortDigimonInterface[];
  nextEvolutions: ShortDigimonInterface[];
  error: number;
  message: string;
}

export interface FetchedError {
  error: number;
  message: string;
}
