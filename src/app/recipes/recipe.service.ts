import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Testipe",
      "Easy and delish!",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg"
    ),
    new Recipe(
      "Groupar",
      "Served with energy and dust.",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg"
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
