export type ID = string | number;

export interface City {
  id: ID;
  name: string;
  description: string;
  image: string;
  favorite: boolean;
}
