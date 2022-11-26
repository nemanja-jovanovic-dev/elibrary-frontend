import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { ButtonComponent } from './button/button.component';

const MODULES_TO_IMPORT = [
    CommonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
];

const COMPONENTS_TO_EXPORT = [
    InputComponent,
    ButtonComponent,
]

@NgModule({
    declarations: [...COMPONENTS_TO_EXPORT],
    imports: [...MODULES_TO_IMPORT],
    exports: [...COMPONENTS_TO_EXPORT]
})
export class SharedModule {}
