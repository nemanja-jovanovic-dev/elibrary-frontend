import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponent,
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {

    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type = 'text';

    destroy$: Subject<boolean> = new Subject<boolean>();

    formControl = new FormControl('');

    value = '';
    disabled = false;

    onTouched!: () => void;
    onChange: (value: any) => void = () => {};

    ngOnInit(): void {
        this.formControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(value => {
            this.setValue(value);
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    private setValue(value: any) {
        if (this.disabled) {
            return;
        }

        this.writeValue(value);
        this.onChange(value);
        this.onTouched();
    }
}
