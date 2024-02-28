import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Output()
    switchPage = new EventEmitter<string>();

    onSelect(page: string) {
        this.switchPage.emit(page);
    }

}
