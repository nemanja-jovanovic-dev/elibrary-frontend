import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() label: string = '';
    // @Input() formControl: FormControl<T>;
    @Input() placeholder: string = '';
    @Input() type = 'text';

    constructor() {}

    ngOnInit(): void {}
}
