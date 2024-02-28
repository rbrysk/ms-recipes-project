import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.epicurious.com/photos/5877a9262ee1d51f664035fb/4:3/w_1724,h_1293,c_limit/Miso-Tahini-Squash-Soup-With-Brown-Rice-recipe-12012017.jpg'),
    ];

    constructor() {}

    ngOnInit(): void {}
}
