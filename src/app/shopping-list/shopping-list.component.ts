import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {NgFor} from '@angular/common';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    imports:[ShoppingEditComponent,NgFor],
    standalone: true,
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
