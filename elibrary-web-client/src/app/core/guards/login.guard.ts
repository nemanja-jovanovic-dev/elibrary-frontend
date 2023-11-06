import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import * as fromActions from '../../reducers/app.actions';
import { PUBLIC } from '../utils/route-service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard  {
    constructor(private router: Router, private store: Store<AppState>) {}

    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const token = window.localStorage.getItem('token');

        if (!token) {
            return this.router.navigate([PUBLIC]);
        }

        this.store.dispatch(fromActions.getUserDetails({ token: token }));
        return true;
    }
}
