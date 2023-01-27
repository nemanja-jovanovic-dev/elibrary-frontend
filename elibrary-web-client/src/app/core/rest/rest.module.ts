import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserRestService } from './login/login-rest.service';

const PROVIDERS = [UserRestService];

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [...PROVIDERS]
})
export class RestModule {}
