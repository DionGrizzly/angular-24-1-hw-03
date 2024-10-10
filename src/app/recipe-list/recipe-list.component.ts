import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe.interface';
import { RecipeRepository } from '../repository.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  public recipeList: Recipe[] = [];
  public recipeSort: string = 'default';

  constructor(private recipeRepository: RecipeRepository) {}

  ngOnInit(): void {
    this.recipeList = this.recipeRepository.getRecipeList();
  }

  public getRecipeList(): Recipe[] {
    return this.recipeRepository.getRecipeList();
  }

  public getSortedRecipeList(): Recipe[] {
    let sortedRecipes = [...this.recipeRepository.getRecipeList()];
    if (this.recipeSort !== 'byDate') {
      return sortedRecipes;
    }
    return sortedRecipes.sort((a, b) => a.date.getDate() - b.date.getDate());
  }
}
