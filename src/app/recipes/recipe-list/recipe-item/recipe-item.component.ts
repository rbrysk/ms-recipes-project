import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
    
    @Input()
    recipe: Recipe;

    @Output()
    onRecipeSelected = new EventEmitter<void>();

    constructor() { }

    ngOnInit() { }

    selectRecipe(selectedRecipe: Recipe) {
        this.onRecipeSelected.emit();
    }

}
