import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './model/login-request.model';
import { UserDetailsModel } from './model/login-response.model';

@Injectable()
export class UserRestService {

    private controllerUrl = `${environment.location}/api`;

    constructor(private httpClient: HttpClient) {}

    login(credentials: LoginRequest): Observable<{token: string}> {
        return this.httpClient.post<{token: string}>(`${this.controllerUrl}/auth/login`, credentials)
    }

    register(form: any): Observable<any> {
        return this.httpClient.post<any>(`${this.controllerUrl}/auth/register`, form);
    }

    getUserDetails(token: string): Observable<UserDetailsModel> {
        return this.httpClient.get<UserDetailsModel>(`${this.controllerUrl}/auth/${token}`);
    }

}
