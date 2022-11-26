import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRestService } from './login/login-rest.service';
import { HttpClientModule } from '@angular/common/http';

const PROVIDERS = [LoginRestService];

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [...PROVIDERS]
})
export class RestModule {}
