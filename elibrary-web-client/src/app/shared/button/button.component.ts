import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() label: string = '';
    @Input() cssClass: string = 'btn__primary'
    @Input() iconClass: string = '';

    @Output() clickEvent = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}
