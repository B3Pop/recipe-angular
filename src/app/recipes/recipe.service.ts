import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Testipe",
      "Easy and delish!",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg",
      [new Ingredient("Mangos", 2), new Ingredient("Milk", 1)]
    ),
    new Recipe(
      "Groupar",
      "Served with energy and dust.",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg",
      [new Ingredient("Fish sticks", 1), new Ingredient("Noodles", 4)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
