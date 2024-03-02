import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {

    @ViewChild('nameInput')
    nameInputReference: ElementRef;

    @ViewChild('amountInput')
    amountInputReference: ElementRef;

    @Output()
    ingredientAddedEvent = new EventEmitter<Ingredient>();

    addItem() {
        const ingredientName = this.nameInputReference.nativeElement.value;
        const ingredientAmount = this.amountInputReference.nativeElement.value;
        const newIngredient: Ingredient = new Ingredient(ingredientName, ingredientAmount);
        this.ingredientAddedEvent.emit(newIngredient);
        console.log(newIngredient)
    }
}
