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
    @Input() disabled: boolean = false;

    @Output() clickEvent = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onClick(): void {
        if (this.disabled) {
            return;
        }

        this.clickEvent.emit();
    }
}
