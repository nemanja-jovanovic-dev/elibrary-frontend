import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './model/login-request.model';
import { LoginResponse } from './model/login-response.model';

@Injectable()
export class LoginRestService {

    private controllerUrl = `${environment.location}/api`;

    constructor(private httpClient: HttpClient) {}

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${this.controllerUrl}/auth/login`, credentials)
    }

}