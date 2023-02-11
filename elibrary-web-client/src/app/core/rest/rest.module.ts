import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserRestService } from './login/user-rest.service';

const PROVIDERS = [UserRestService];

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [...PROVIDERS]
})
export class RestModule {}
