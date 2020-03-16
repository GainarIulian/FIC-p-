
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-column',
    templateUrl: './starColumn.component.html',
    styleUrls: ['./starColumn.component.css']
})

export class StarColumn implements OnChanges {

    @Input() rating = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth = 0;

    onClick(): void {
        this.ratingClicked.emit(`Stars: ${this.rating}`)
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
