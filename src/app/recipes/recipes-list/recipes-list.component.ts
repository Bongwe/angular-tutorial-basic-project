import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe [] = [
      new Recipe ("A Test Recipe","This is simply a test","http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png"),
    new Recipe ("Another Test Recipe","This is simply a test","http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
