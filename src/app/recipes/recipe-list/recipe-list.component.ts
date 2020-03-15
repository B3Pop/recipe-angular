import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Testipe",
      "Easy and delish!",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg"
    ),
    new Recipe(
      "Groupar",
      "Served with energy and dust.",
      "https://storage.needpix.com/rsynced_images/potato-soup-2152265_1280.jpg"
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}