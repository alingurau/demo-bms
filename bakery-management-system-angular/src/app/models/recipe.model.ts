import { Ingredient } from './ingredient.model';

export class Recipe {
  id = 0;
  userId: any;
  name = '';
  description = '';
  imagePath = '';
  ingredients = {} as Ingredient;
  position = 0;

  constructor(data: any) {
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        this[prop] = data[prop];
      }
    }
  }
}
