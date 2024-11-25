import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {DropdownDirective} from '../../shared/dropdown.directive';
import {NgForOf} from '@angular/common';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  standalone: true,
  imports: [
    DropdownDirective,
    NgForOf
  ],
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService:ShoppingListService) { }


  addToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  };


  ngOnInit() {
  }

}
