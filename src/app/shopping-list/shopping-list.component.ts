import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {NgFor} from '@angular/common';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    imports:[ShoppingEditComponent,NgFor],
    standalone: true,
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.Ingredients;
    this.shoppingListService.ingredientChanged.subscribe((ingredients)=>{
      this.ingredients = ingredients;
    });
  }
}
