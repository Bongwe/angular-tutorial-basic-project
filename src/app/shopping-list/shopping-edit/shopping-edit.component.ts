import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingedients: Ingredient [] = [];
  @ViewChild('nameInput') nameInput: ElementRef;  
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() onItemsAdded = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onAddItem () {
    var anIngredient = new Ingredient(this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value);
    this.ingedients.push(anIngredient);
    this.onItemsAdded.emit(this.ingedients);
  }

}
