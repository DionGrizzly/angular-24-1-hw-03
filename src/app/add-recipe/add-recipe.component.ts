import { Component } from '@angular/core';
import { RecipeRepository } from '../repository.service';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  public author = ''
  public date = new Date
  public text = ''

  constructor(private recipeRepository: RecipeRepository) {}

  public onAddRecipe(): void {
    this.recipeRepository.addRecipe(this.author, this.date, this.text);
    this.author = '';
    this.date = new Date;
    this.text = '';
  }

}
