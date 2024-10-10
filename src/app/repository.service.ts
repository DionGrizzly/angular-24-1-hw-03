import { Injectable } from '@angular/core';
import { Recipe } from './shared/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeRepository {

  private recipes: Recipe[] = [
    {
      id: '1',
      author: 'Default author 1',
      date: new Date('2024-10-12'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '2',
      author: 'Default author 2',
      date: new Date('2024-10-04'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '3',
      author: 'Default author 3',
      date: new Date('2024-10-08'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  public getRecipeList(): Recipe[] {
    return this.recipes;
  }

  public addRecipe(author: string, date: Date, text: string): void {
    const id = (Math.random() + 1).toString(36).substring(7);
    if (author && date && text) {
      const newRecipe: Recipe = { id, author, date, text };
      this.recipes.push(newRecipe);
    } else {
      alert('Заповніть усі поля.');
    }
  }
}
