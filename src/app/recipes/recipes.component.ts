import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {CommonModule} from '@angular/common';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
  imports: [RecipeListComponent, RecipeDetailComponent,CommonModule],
    standalone: true,
    styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe)=>{
        this.selectedRecipe = recipe;
      }
    );
  }

}
